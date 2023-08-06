import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import { GOOGLE_API_KEY } from '../lib/constant';

const containerStyle = {
    height: '350px',
    width: '100%',
};

const GoogleMapComponent = ({ lat, long }) => {
    return (
            <LoadScript googleMapsApiKey={GOOGLE_API_KEY}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={{ lat: parseFloat(lat), lng: parseFloat(long) }}
                zoom={13}
            >
                <Marker position={{ lat: parseFloat(lat), lng: parseFloat(long) }} />
            </GoogleMap>
            </LoadScript>
    );
};

export default GoogleMapComponent;
