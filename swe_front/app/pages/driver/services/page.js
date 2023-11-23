'use client'
// pages/services/index.js
import React, { useState } from 'react';
import Header from '../../../components/HeaderDriver'; // Adjust the import path as needed
import MyHistory from '../../../components/DriverHistory'; // Adjust the import path as needed
import MyTasks from '../../../components/DriverTasks'; // Adjust the import path as needed

const Services = () => {
  const [activeService, setActiveService] = useState('history'); // 'history' or 'tasks'

  return (
    <>
      <Header />
      <div className="container mx-auto p-6 bg-gray-100 min-h-screen flex">
        {/* Sidebar */}
        <div className="w-1/4 bg-white p-4 rounded-2xl">
          <button
            onClick={() => setActiveService('history')}
            className={`w-full text-black text-left p-2 my-2 transition-colors duration-150 rounded-lg ${activeService === 'history' ? 'bg-blue-500 text-white' : 'hover:bg-blue-100'}`}
          >
            My History
          </button>
          <button
            onClick={() => setActiveService('tasks')}
            className={`w-full text-black text-left p-2 my-2 transition-colors duration-150 rounded-lg ${activeService === 'tasks' ? 'bg-blue-500 text-white' : 'hover:bg-blue-100'}`}
          >
            My Tasks
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-4 bg-gray-100">
          {/* Action Buttons */}
          <div className="flex justify-end space-x-4">
            <button className="text-blue-500 bg-[#e4e9ff] hover:text-blue-950 hover:bg-blue-200 duration-150 drop-shadow-sm font-bold py-2 px-8 rounded-xl focus:outline-none focus:shadow-outline">
              Vehicle Tracking
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl">
              Add Vehicle
            </button>
          </div>
          
          {/* Dynamic Component */}
          {activeService === 'history' ? <MyHistory /> : <MyTasks />}
        </div>
      </div>
    </>
  );
};

export default Services;
