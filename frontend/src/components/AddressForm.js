import React, { useState } from 'react';
import axios from 'axios';
const API_BASE_URL = 'http://localhost:5000';


function AddressForm() {
    const [form, setForm] = useState({ house: '', road: '', category: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('${API_BASE_URL}/api/addresses', form);
        alert('Address saved!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="House/Flat No."
                onChange={(e) => setForm({ ...form, house: e.target.value })}
            />
            <input
                type="text"
                placeholder="Apartment/Road"
                onChange={(e) => setForm({ ...form, road: e.target.value })}
            />
            <select onChange={(e) => setForm({ ...form, category: e.target.value })}>
                <option value="Home">Home</option>
                <option value="Office">Office</option>
                <option value="Friends & Family">Friends & Family</option>
            </select>
            <button type="submit">Save Address</button>
        </form>
    );
}

export default AddressForm;
