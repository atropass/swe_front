'use client'
import React from 'react';
import Header from './HeaderDriver'; // Adjust the import path as needed
import MapContainer from './MapContainer';
import {useState, useEffect, useRef} from 'react';
import { LoadScript } from '@react-google-maps/api';

const MyTasks = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const [map, setMap] = useState(false);
  const overlayRef = useRef(null);
  const showMap = () => {
    setMap(!map)
  }
  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      showMap();
    }
  };
  useEffect(() => {
    if (map) {
      document.addEventListener('click', handleOverlayClick);
    } else {
      document.removeEventListener('click', handleOverlayClick);
    }

    return () => {
      document.removeEventListener('click', handleOverlayClick);
    };
  }, [map]);
  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              My Tasks
            </h3>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              {/* Тоже с бекэнда достать нада */}
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Task ID
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  000003 - Ford Mustang - <a href="#" onClick={showMap}>See</a> - 12.02.23 - In progress
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <LoadScript googleMapsApiKey={apiKey}>
        {map ? (
          <div>
            <div ref={overlayRef} className=' absolute top-0 left-0 h-screen w-screen flex justify center align center backdrop-blur-md'></div>
            <div className=' relative w-[750px]'>
              <MapContainer vehicles={[{id: 1, latitude: 51.09059758568362, longitude: 71.39845426306142 },]} />
            </div>
          </div>
        ) : null}
      </LoadScript>
    </>
  );
};

export default MyTasks;