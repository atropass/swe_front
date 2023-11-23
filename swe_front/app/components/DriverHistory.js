import React from 'react';
import Header from './HeaderDriver'; // Adjust the import path as needed

const MyHistory = () => {
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
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Gov.Num
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  131ss07 - Ford Mustang - 234 - 12.02.23
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyHistory;