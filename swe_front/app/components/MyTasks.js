import React from 'react';
import Header from './Header'; // Adjust the import path as needed

const MyTasks = () => {
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
              {/* Repeat this block for each task */}
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Task ID
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  000003 - Ford Mustang - See - 12.02.23 - In progress
                </dd>
              </div>
              {/* ... other task items */}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyTasks;