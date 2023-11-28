'use client'
import React, { useState, useEffect } from 'react';

const MaintenanceTasks= () => {
  const [tasks, setTasks] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [history, setHistory] = useState([]);
  const id = "e940ab34-53a2-493a-8873-eb508ec1eb2c"

  useEffect(() => {
    fetch('http://127.0.0.1:4000/api/maintenance_task/index')
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
      const filteredTasks = tasks.filter((task) => task.maintenance_person_id === id);
      setHistory(filteredTasks);
      console.log(filteredTasks);
    }
  }, [tasks]);

  const getVehicleData = (vid) => {
    console.log(vehicles);
    let vehicle = vehicles.find((vehicle) => vehicle.id === vid);
    return vehicle;
  }

  const downloadPdf = async () => {
    const response = await fetch('/api/generate-pdf');
    const blob = await response.blob();
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'example.pdf';
    link.click();
  };

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
              { history.length > 0 &&
                history.map((task) => {
                  const vehicleData = getVehicleData(task.vehicle_id);
                  console.log(vehicleData)
                  return vehicleData ? (
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
                      Maintenance Cost
                    </dt>
                    <dd className="text-sm text-gray-900 col-span-1">
                      {task.maintenance_cost} $
                    </dd>
                    <dt className="text-sm font-medium text-gray-500 col-span-1">
                      Date
                    </dt>
                    <dd className="text-sm text-gray-900 col-span-1">
                      {task.scheduled_date.slice(0, 10)}
                    </dd>
                    <dt className="text-sm font-medium text-gray-500 col-span-1">
                      Task Description
                    </dt>
                    <dd className="text-sm text-gray-900 col-span-1">
                      {task.description}
                    </dd>
                    <dt className="text-sm font-medium text-gray-500 col-span-1">
                      Status
                    </dt>
                    <dd className="text-sm text-gray-900 col-span-1">
                      {task.status}
                    </dd>
                    <dd className="text-sm col-span-6">

                    <div>
                      <button
                          className="text-white bg-blue-500 hover:bg-blue-600 font-bold py-2 px-4 rounded-xl"
                          onClick={downloadPdf}
                        >
                          See Report
                        </button>
                    </div>
                    </dd>
                  </div>
                ) : <p>Loading...</p>})}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};
export default MaintenanceTasks;
