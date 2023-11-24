'use client'
import { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const MapContainer = ({vehicles}) => {
    const [map, setMap] = useState(null);
    const [directions, setDirections] = useState(null);

    const mapStyles = {
        height: '400px',
        width: '100%',
    };
    const defaultCenter = {
        lat: 51.09059758568362, lng: 71.39845426306142
    }

    const start = {
        lat: 51.09059758568362, lng: 71.39845426306142
    };
    const end = {
        lat: 51.177170939492065, lng: 71.42732328674491
    };
    const directionOptions = {
        origin: start,
        destination: end,
        travelMode: 'DRIVING',
    };

    // useEffect(() => {
    //     if (vehicles.length > 0) {
    //         const center = {
    //           lat: vehicles[0].latitude,
    //           lng: vehicles[0].longitude,
    //         };
    //         setMap({ ...map, center });
    //     }}, [vehicles]);
    const onLoad = (map) => {
        setMap(map);
      };
    useEffect(() => {
        if (map && !directions) {
          // Only make the directions request if map is loaded and directions have not been set
          const directionsService = new window.google.maps.DirectionsService();
          directionsService.route(directionOptions, (response, status) => {
            if (status === 'OK') {
              setDirections(response);
            } else {
              console.error(`Directions request failed with status: ${status}`);
            }
          });
        }
    }, [map, directions]);

    return (
        <GoogleMap mapContainerStyle={mapStyles} zoom={8} center={defaultCenter} onLoad={onLoad}>
            {vehicles.map((vehicle) => (
            <Marker
                key={vehicle.id}
                position={{ lat: vehicle.latitude, lng: vehicle.longitude }}
                title={vehicle.name}
            />
            ))}
            <Marker position={start} />
            <Marker position={end} />
            {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
    );
}

export default MapContainer;