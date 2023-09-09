import React from 'react';

function UploadModal({ closeModal }) {
  return (
    <div className="custom-modal">
      <div className="custom-modal-content">
        <h1 className="text-lg font-bold">Uploaded File</h1>
        <div className="w-full shadow-2xl mt-1 p-4 bg-white rounded-lg">
          <h1 className="text-sm font-semibold text-center md:text-left">Proposal Form</h1>
          <div className="flex flex-col md:flex-row justify-between items-center mt-3">
            <div className="flex gap-3 items-center">
              <img className="w-12 h-12" src="" alt="" />
              <div>
                <h1 className="font-medium text-lg">Page 1</h1>
                <h2 className="text-sm">125 MB</h2>
              </div>
            </div>
            <div className="md:mt-0 mt-3">
              <span>25%</span>
              <img src="image/icon/close-fill.png" className="shadow-3xl bg-white" alt="Close Icon" onClick={closeModal} />
            </div>
          </div>
          <div className="w-full mt-2 bg-gray-200 rounded-full dark:bg-gray-700">
            <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center py-1 leading-none rounded-full md:w-[45%] sm:w-[60%] xs:w-[75%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadModal;
