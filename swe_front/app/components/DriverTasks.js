'use client'
import React from 'react';
import Header from './HeaderDriver'; // Adjust the import path as needed
import MapContainer from './MapContainer';
import {useState, useEffect, useRef} from 'react';
import { LoadScript } from '@react-google-maps/api';

const MyTasks = () => {
  const [map, setMap] = useState(false);
  const [mapKey, setMapKey] = useState(0);
  const overlayRef = useRef(null);
  const [tasks, setTasks] = useState([]);
  const id = "70ca7346-ec8c-4220-8774-3320b3b82bd3";
  const [vehicles, setVehicles] = useState([]);
  const [history, setHistory] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [destination, setDestination] = useState({
    latitude: null,
    longitude: null,
  });
  const [prevDestination, setPrevDestination] = useState({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    fetch('http://127.0.0.1:4000/api/driver_task/index')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTasks(data.data);
      });
    fetch('http://127.0.0.1:4000/api/vehicle/index')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setVehicles(data.data);
      });
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      const filteredTasks = tasks.filter((task) => task.driver_id === id);
      setHistory(filteredTasks);
      console.log(filteredTasks);
    }
  }, [tasks, id]);

  const getCarData = (user_id) => {
    console.log(vehicles);
    let vehicle = vehicles.find((vehicle) => vehicle.id === user_id);
    return vehicle;
  }

  const showMap = (carData) => {
    setSelectedCar(carData);
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

  const handleTaskDone  = (task) => {
    fetch(`http://127.0.0.1:4000/api/driver_task/update/${task.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(makePayload(task)),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const newTasks = tasks.filter((t) => t.id !== task.id);
        newTasks.push(data.data);
        setTasks(newTasks);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  const makePayload = (task) => {
    console.log(task)
    return {
      driver_task:{
              driver_id: task.driver_id,
              vehicle_id: task.vehicle_id,
              start_time: task.start_time,
              end_time: task.end_time,
              route_information: task.route_information,
              status: 'Done',
              description: task.description,
      }
    };
  }
  const getStatusColor = (status) => {
    switch (status) {
      case 'In progress':
        return 'text-yellow-500';
      case 'Done':
        return 'text-green-600';
      default:
        return 'text-red-500';
    }
  };

  const updateDestination = (e) => {
    // Validate if the entered values are valid numbers before updating the state
    if (!isNaN(destination.latitude) && !isNaN(destination.longitude)) {
      setDestination({
        ...destination,
        [e.target.name]: parseFloat(e.target.value),
      })
    } else {
      alert('Please enter valid latitude and longitude.');
    }
  };

  const submitDestination = () => {
    setMap(true);
    setMapKey((prevKey) => prevKey + 1);
  }

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
              {history.map((task) => {
                  const carData = getCarData(task.vehicle_id);
                  return (
                    carData && 
                    <div key={task.id} className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Gov.Num
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {carData.license_plate} - {carData.make} {carData.model} - <a href="#" className='underline font-semibold' onClick={() => showMap(carData)}>See</a> - {task.description}
                         - {task.start_time.slice(0, 10)} 
                         - <span className={getStatusColor(task.status)}>{task.status}</span>
                         <button className={task.status != 'Done' ? "py-2 px-4 rounded bg-blue-500 hover:bg-blue-600 text-white ml-4" : "bg-gray-500 cursor-not-allowed py-2 px-4 rounded  text-white ml-4"} 
                         onClick={() => handleTaskDone(task)} disabled={task.status == 'Done'}>Done</button>
                      </dd>
                    </div>
                  )
                })}
                <dt className="text-sm font-medium text-gray-500">
                  Gov.Num
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  000003 - Ford Mustang - <a href="#" onClick={showMap}>See</a> - 12.02.23 - In progress
                </dd>
            </dl>
          </div>
        </div>
      </div>
      <div>
        {map ? (
          <div >
            <div ref={overlayRef} className=' fixed inset-0 top-0 left-0 h-screen w-screen flex justify center align center backdrop-blur-md'></div>
            <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-10 bg-white shadow overflow-hidden sm:rounded-lg flex'>
              <div className='min-w-[750px]'>
                <MapContainer vehicles={[selectedCar]} destination={destination} mapKey={mapKey} setMapKey={setMapKey} />
              </div>
              <div className='flex flex-col ml-8'>
                <h2 className="text-2xl font-bold mb-4">Destination</h2>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="latitude">
                    Latitude
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="latitude"
                    type="text"
                    placeholder="Enter destination latitude"
                    onChange={(e) => 
                      {
                        setPrevDestination(destination);
                        setDestination({ ...destination, latitude: parseFloat(e.target.value) })}
                      }
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="longitude">
                    Longitude
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="longitude"
                    type="text"
                    placeholder="Enter destination longitude"
                    onChange={(e) => 
                      {
                        setPrevDestination(destination);
                        setDestination({ ...destination, longitude: parseFloat(e.target.value) })}
                      }
                  />
                  <button
                    className="mt-4 py-2 px-4 rounded bg-blue-500 hover:bg-blue-600 text-white"
                    onClick={submitDestination}
                  >Update</button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        </div>
    </>
  );
};

export default MyTasks;