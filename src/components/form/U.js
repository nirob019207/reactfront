import React, { useState } from 'react';
import axios from 'axios';

function Upload() {
  const [isUploadModalOpen, setUploadModalOpen] = useState(false);

  const openUploadModal = () => {
    setUploadModalOpen(true);
  };

  const closeUploadModal = () => {
    setUploadModalOpen(false);
  };

  const handleFileUpload = async (files) => {
    try {
      const formData = new FormData();

      // Append each selected file to the FormData object
      for (let i = 0; i < files.length; i++) {
        formData.append('files', files[i]);
      }

      // Make the POST request to upload the files
      const response = await axios.post('http://104.198.53.36:1980/filestorage/upload_multiple', formData, {
        headers: {
          'accept': 'application/json',
          'api-key': 'DigitizeioBangladesh1971',
          'Content-Type': 'multipart/form-data',
        },
      });

      // Capture and log the response
      console.log('Upload Response:', response.data);

      // Close the upload modal
      closeUploadModal();
    } catch (error) {
      console.error('Upload Error:', error);
      // Handle the error as needed
    }
  };

  return (
    <div>
      <div className="bg-white mt-2 w-full px-3">
        {/* ... (same as before) */}
      </div>

      <div className="bg-stone-100 rounded-lg py-1 mx-3">
        <div className="mx-4 gap-8 grid grid-cols-1 xs:grid xs:grid-cols-1 xs:gap-16 sm:grid sm:grid-cols-2 sm:gap-10 md:grid md:grid-cols-2 md:gap-10 mt-8 lg:grid lg:grid-cols-3 lg:gap-10 xl:grid xl:grid-cols-4 xl:gap-5">
          <div className="shadow-xl bg-white flex flex-col items-center rounded-lg p-3">
            <h1 className="text-lg font-semibold mb-4">Proposal Form</h1>
            <div
              className="border-dotted border-2 border-gray-300 rounded-md flex flex-col items-center justify-center cursor-pointer"
              onClick={openUploadModal}
            >
              <img src="image/icon/upload-2-fill.png" alt="Upload Icon" className="mb-2" />
              <button className="text-gray-700 text-sm text-center leading-tight mb-1" onClick={openUploadModal}>
                Drag & Drop
              </button>
            </div>
            Or
            <button className="mt-6 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition duration-300 ease-in-out flex gap-1 py-2 px-2" onClick={openUploadModal}>
              <img src="image/icon/qr-scan-line.png" alt="" />
              Scan
            </button>
          </div>
          {/* Add similar blocks for other items */}
        </div>
      </div>

      {/* Custom Modal */}
      {isUploadModalOpen && (
        <div className="custom-modal">
          <div className="custom-modal-content">
          <div className="w-full shadow-2xl mt-1 p-4 bg-white rounded-lg">
          <h1 className="text-lg font-bold">Uploaded File</h1>
          <h1 className="text-sm font-semibold text-center md:text-left">Proposal Form</h1>
          <div className="flex flex-col md:flex-row justify-between items-center mt-3">
          <div className="flex gap-3 items-center">
          <img className="w-12 h-12" src="" alt="" />
          <div>
                <h1 className="font-medium text-lg">Page 1</h1>
                <h2 className="text-sm">125 MB</h2>
              </div>
          </div>
          

            <input type="file" multiple onChange={(e) => handleFileUpload(e.target.files)} />
            <button onClick={closeUploadModal}>Close</button>
          
          </div>
          </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Upload;
