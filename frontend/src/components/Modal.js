import React from 'react';

function Modal({ onEnableLocation, onSearchManually }) {
    return (
        <div className="modal">
            <p>Location permission is disabled. Please enable it.</p>
            <button onClick={onEnableLocation}>Enable Location</button>
            <button onClick={onSearchManually}>Search Manually</button>
        </div>
    );
}

export default Modal;
