import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AddressList() {
    const [addresses, setAddresses] = useState([]);

    useEffect(() => {
        axios.get('/api/addresses').then((response) => {
            setAddresses(response.data);
        });
    }, []);

    const handleDelete = (id) => {
        axios.delete(`/api/addresses/${id}`).then(() => {
            setAddresses(addresses.filter((addr) => addr._id !== id));
        });
    };

    return (
        <div>
            <h2>Saved Addresses</h2>
            <ul>
                {addresses.map((addr) => (
                    <li key={addr._id}>
                        {addr.house}, {addr.road} - {addr.category}
                        <button onClick={() => handleDelete(addr._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AddressList;
