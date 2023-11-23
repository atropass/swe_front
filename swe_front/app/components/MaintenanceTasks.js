import React, { useState } from 'react';

const MaintenanceTasks= () => {

  const tasks = [
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

  ];

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
              {tasks.map((task) => (
                <div key={task.id} className="bg-gray-50 px-4 py-5 grid grid-cols-6 gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500 col-span-1">
                    Task No.
                  </dt>
                  <dd className="text-sm text-gray-900 col-span-1">
                    {task.taskNo}
                  </dd>
                  <dt className="text-sm font-medium text-gray-500 col-span-1">
                    Car Gov.Num
                  </dt>
                  <dd className="text-sm text-gray-900 col-span-1">
                    {task.carGovNum}
                  </dd>
                  <dt className="text-sm font-medium text-gray-500 col-span-1">
                    Fuel Price
                  </dt>
                  <dd className="text-sm text-gray-900 col-span-1">
                    {task.fuelPrice}
                  </dd>
                  <dt className="text-sm font-medium text-gray-500 col-span-1">
                    Date
                  </dt>
                  <dd className="text-sm text-gray-900 col-span-1">
                    {task.date}
                  </dd>
                  <dt className="text-sm font-medium text-gray-500 col-span-1">
                    Gas Station
                  </dt>
                  <dd className="text-sm text-gray-900 col-span-1">
                    {task.gasStation}
                  </dd>
                  <dt className="text-sm font-medium text-gray-500 col-span-1">
                    Status
                  </dt>
                  <dd className="text-sm text-gray-900 col-span-1">
                    {task.status}
                  </dd>
                  <dd className="text-sm col-span-6">
                  <button 
                      className="text-white bg-blue-500 hover:bg-blue-600 font-bold py-2 px-4 rounded-xl"
                    >
                      See Report
                    </button>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};
export default MaintenanceTasks;
