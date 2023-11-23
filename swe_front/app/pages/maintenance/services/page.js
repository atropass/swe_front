'use client'
// pages/services/index.js
import React, { useState } from 'react';
import Header from '../../../components/HeaderMaintenance'; // Adjust the import path as needed
import MyTasks from '../../../components/MaintenanceTasks'; // Adjust the import path as needed

const Services = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto p-6 font-bold bg-gray-100 min-h-screen flex">
        <div className="w-1/4 bg-white p-4 rounded-2xl">
          <button
            className={`w-full text-black text-left p-2 my-2 transition-colors duration-150 rounded-l hover:bg-blue-100`}
          >
            My Tasks
          </button>
        </div>
        <div className="flex-1 ml-4 bg-gray-100">
        <MyTasks />        
        </div>
      </div>
    </>
  );
};

export default Services;
