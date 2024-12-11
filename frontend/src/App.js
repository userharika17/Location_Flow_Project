import React from 'react';
import Modal from './components/Modal';
import MapInterface from './components/MapInterface';
import AddressForm from './components/AddressForm';
import AddressList from './components/AddressList';

function App() {
    return (
        <div>
            <h1>Location Flow App</h1>
            <Modal />
            <MapInterface />
            <AddressForm />
            <AddressList />
        </div>
    );
}

export default App;
