// pages/contacts.js
import React from 'react';
import Header from '../../../components/HeaderDriver'; // Adjust the import path as needed

const Contacts = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center bg-gray-50 justify-center min-h-screen px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contacts</h2>
          <p className="text-gray-600 mb-8">VMS</p>
          <p className="text-gray-600 mb-2">A high-quality solution for those who want to use vehicle manage system quickly.</p>
          <div className="space-y-5 mt-6">
            <div>
              <h3 className="text-gray-800 font-semibold">E-MAIL</h3>
              <p className="text-gray-800">info@gmail.com</p>
            </div>
            <div>
              <h3 className="text-gray-800 font-semibold">PHONE</h3>
              <p className="text-gray-800">8 800 555 3535</p>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Contacts;
