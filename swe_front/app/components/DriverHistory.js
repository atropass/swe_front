'use client'
import { useState, useEffect } from 'react';
import Header from './HeaderDriver'; // Adjust the import path as needed

const MyHistory = () => {
  const [history, setHistory] = useState([]);
  const [tasks, setTasks] = useState([]);
  const id = "70ca7346-ec8c-4220-8774-3320b3b82bd3";
  const [vehicles, setVehicles] = useState([]);

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
      const filteredTasks = tasks.filter((task) => task.driver_id === id && task.status === "Done");
      setHistory(filteredTasks);
      console.log(filteredTasks);
    }
  }, [tasks, id]);


  const getCarData = (user_id) => {
    let vehicle = vehicles.find((vehicle) => vehicle.id === user_id);
    return vehicle;
  }

  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              My History
            </h3>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              {/* Здесь бекенд таблица */}
              {history.map((task) => {
                  const carData = getCarData(task.vehicle_id);
                  return (
                    carData && 
                    <div key={task.id} className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Gov.Num
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {carData.license_plate} - {carData.make} {carData.model} - {task.description} - {task.start_time.slice(0, 10)}
                      </dd>
                    </div>
                  )
                })}
                <dt className="text-sm font-medium text-gray-500">
                  Gov.Num
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  131ss07 - Ford Mustang - 234 - 12.02.23
                </dd>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyHistory;