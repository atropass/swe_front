import React from 'react';
import Header from '../../components/Header'; // Adjust the import path as needed
import Image from 'next/image'
const About = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center bg-gray-50 justify-center min-h-screen px-6">
      <Image
      src="/car.png"
      width={600}
      height={600}
      alt="Picture of the author"
    />
        <div className="text-center text-lg font-semibold">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-10">About Us</h2>
          <p className="text-gray-600 text-center text-lg font-semibold" style={{ width: '30rem' }}>A vehicle management system is a software system-or platform- that serves to manage commercial fleets of vehicles, such as cars, vans or trucks or even heavy equipment-to ensure they're utilized safely, efficiently and professionally, while making sure they're well maintained and high-performing.</p>
        </div>
      </div>
      
    </>
  );
};

export default About;
