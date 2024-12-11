import React, { useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px',
};

const center = {
    lat: -3.745,
    lng: -38.523,
};

function MapInterface() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });

    const [marker, setMarker] = useState(center);

    if (!isLoaded) return <div>Loading...</div>;

    return (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
            <Marker
                position={marker}
                draggable={true}
                onDragEnd={(e) => setMarker({ lat: e.latLng.lat(), lng: e.latLng.lng() })}
            />
        </GoogleMap>
    );
}

export default MapInterface;
