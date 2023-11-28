'use client'
import { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const MapContainer = ({vehicles, destination, mapKey, setMapKey}) => {
    const [map, setMap] = useState(null);
    const [directions, setDirections] = useState(null);
    const [directionOptions, setDirectionOptions] = useState({
        origin: { lat: vehicles[0].latitude, lng: vehicles[0].longitude },
        destination: {
          lat: destination.latitude != null ? destination.latitude : 51.09059758568362,
          lng: destination.longitude != null ? destination.longitude : 71.39845426306142,
        },
        travelMode: 'DRIVING',
      });

    const mapStyles = {
        height: '400px',
        width: '100%',
    };
    const defaultCenter = {
        lat: 51.09059758568362, lng: 71.39845426306142
    }

    const start = {
        lat: vehicles[0].latitude, lng: vehicles[0].longitude
    };
    const end = {
        lat: destination.latitude != null ? destination.latitude : 51.09059758568362,
        lng: destination.longitude != null ? destination.longitude : 71.39845426306142
    }
    // const directionOptions = {
    //     origin: start,
    //     destination: end,
    //     travelMode: 'DRIVING',
    // };

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
        if (map && destination) {
          // Only make the directions request if map is loaded and destination is available
          const directionsService = new window.google.maps.DirectionsService();
    
          directionsService.route(directionOptions, (response, status) => {
            if (status === 'OK') {
              setDirections(response);
            } else {
              console.error(`Directions request failed with status: ${status}`);
            }
          });
        }
      }, [map, destination, directionOptions]);
      useEffect(() => {
        // Update directionOptions when destination changes
        setDirectionOptions((prevOptions) => ({
          ...prevOptions,
          destination: {
            lat: destination.latitude != null ? destination.latitude : 51.09059758568362,
            lng: destination.longitude != null ? destination.longitude : 71.39845426306142,
          },
        }));
      }, [destination]);
    console.log("Destination")
    console.log(directionOptions)
    return (
        <GoogleMap mapContainerStyle={mapStyles} zoom={8} center={defaultCenter} onLoad={onLoad}>
          {vehicles.map((vehicle) => (
            <Marker
              key={vehicle.id}
              position={{ lat: vehicle.latitude, lng: vehicle.longitude }}
              title={vehicle.name}
            />
          ))}
          <Marker position={directionOptions.origin} />
          {directions && <Marker position={directionOptions.destination} key={mapKey+1} />}
          {directions && <DirectionsRenderer directions={directions} key={mapKey} />}
        </GoogleMap>
      );
}

export default MapContainer;