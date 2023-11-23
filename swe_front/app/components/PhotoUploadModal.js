import React, { useState } from 'react';

const PhotoUploadModal = ({ isOpen, onClose, taskId }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    // Implement the upload logic here
    console.log('Uploading photo for task ID:', taskId);
    console.log(file);
    // After upload, close the modal
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-5 rounded-lg shadow-lg relative">
        {/* Close button */}
        <button onClick={onClose} className="absolute top-0 right-0 mt-2 mr-2">
          <span className="text-xl font-semibold">&times;</span>
        </button>
        {/* Invisible file input */}
        <input 
          type="file" 
          onChange={handleFileChange} 
          className="hidden" 
          id="fileInput" 
        />
        {/* Plus icon */}
        <label htmlFor="fileInput" className="cursor-pointer">
          <div className="flex justify-center">
            <div className="bg-white rounded-full p-4">
              <span className="text-green-600 text-7xl">+</span>
            </div>
          </div>
        </label>
        {/* Title */}
        <h2 className="text-xl font-bold text-center mt-4 text-black mb-2">Add Photo</h2>
        {/* Upload button */}
        <div className="flex justify-center">
          <button onClick={handleSubmit} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-8 rounded-lg mt-2">
            Upload Photo
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoUploadModal;