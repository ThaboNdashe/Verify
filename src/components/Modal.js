import React from 'react';

function Modal({ service, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 overflow-hidden">
        <div className="bg-gradient-to-r from-orange-400 to-pink-500 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">{service.title}</h2>
          <button onClick={onClose} className="text-white hover:text-gray-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
              <ion-icon name={service.icon} class="text-3xl text-indigo-600"></ion-icon>
            </div>
            <p className="text-lg text-gray-600">{service.description}</p>
          </div>
          <div className="mt-6">
          <p className="text-lg text-gray-600">{service.description1}</p>
          </div>
          <div className="mt-6 flex justify-end">
            <button onClick={onClose} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors duration-300">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;