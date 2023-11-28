import React, { useState, useEffect } from 'react';
import PhotoUploadModal from './PhotoUploadModal'; // Make sure this import path is correct

const FuelerTasks= () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [history, setHistory] = useState([]);
  const id = "12c55df3-c1ac-4e66-8bcf-bdc241cf9e3d"

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch('http://127.0.0.1:4000/api/fueling_task/index');
      const data = await response.json();
      setTasks(data.data);
    };
    const fetchVehicles = async () => {
      const response = await fetch('http://127.0.0.1:4000/api/vehicle/index');
      const data = await response.json();
      setVehicles(data.data);
    }

    fetchTasks();
    fetchVehicles();
  }, [])

  useEffect(() => {
    if (tasks.length > 0) {
      const filteredTasks = tasks.filter((task) => task.fueling_person_id === id);
      setHistory(filteredTasks);
      console.log(filteredTasks);
    }
  }, [tasks, id]);

  const getVehicleData = (id) => {
    console.log(vehicles);
    let vehicle = vehicles.find((vehicle) => vehicle.id === id);
    return vehicle;
  }

  const task = [
    {
        id: '000001',
        taskNo: '000001',
        carGovNum: '131ss07',
        fuelPrice: '2600KZT (10ltr)',
        date: '12.02.23',
        gasStation: 'QazMunaiGaz',
        status: 'In progress',
      },
      {
        id: '000002',
        taskNo: '000002',
        carGovNum: '131ss02',
        fuelPrice: '2200KZT (10ltr)',
        date: '22.02.23',
        gasStation: 'DazMunaiGaz',
        status: 'Dn progress',
      },
    // Add more tasks here...
  ];

  const openModal = (taskId) => {
    setSelectedTaskId(taskId);
    setIsModalOpen(true);
  };

  return (
    <>
      <PhotoUploadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} taskId={selectedTaskId} />
      <div className="container mx-auto mt-10">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              My Tasks
            </h3>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              { history.length > 0 ? 
                history.map((task) => {
                  const vehicleData = getVehicleData(task.vehicle_id);
                  return (
                  <div key={task.id} className="bg-gray-50 px-4 py-5 grid grid-cols-6 gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500 col-span-1">
                      Task No.
                    </dt>
                    <dd className="text-sm text-gray-900 col-span-1">
                      {task.id.slice(0, 6)}
                    </dd>
                    <dt className="text-sm font-medium text-gray-500 col-span-1">
                      Car Gov.Num
                    </dt>
                    <dd className="text-sm text-gray-900 col-span-1">
                      {vehicleData.license_plate}
                    </dd>
                    <dt className="text-sm font-medium text-gray-500 col-span-1">
                      Fuel Quantity
                    </dt>
                    <dd className="text-sm text-gray-900 col-span-1">
                      {task.fuel_quantity} L
                    </dd>
                    <dt className="text-sm font-medium text-gray-500 col-span-1">
                      Date
                    </dt>
                    <dd className="text-sm text-gray-900 col-span-1">
                      {task.date_and_time.slice(0, 10)}
                    </dd>
                    <dt className="text-sm font-medium text-gray-500 col-span-1">
                      Gas Station
                    </dt>
                    <dd className="text-sm text-gray-900 col-span-1">
                      {task.gas_station_name}
                    </dd>
                    <dt className="text-sm font-medium text-gray-500 col-span-1">
                      Status
                    </dt>
                    <dd className="text-sm text-gray-900 col-span-1">
                      {task.status}
                    </dd>
                    <dd className="text-sm col-span-6">
                      <button 
                        onClick={() => openModal(task.id)}
                        className="text-white bg-blue-500 hover:bg-blue-600 font-bold py-2 px-4 rounded-xl"
                      >
                        Add Photo
                      </button>
                    </dd>
                  </div>
                )}) : (
                  <p>Loading...</p>
                )
              }
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};
export default FuelerTasks;
