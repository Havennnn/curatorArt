import React, { useState } from 'react';

// Modal Component
const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render the modal if not open

  return (
    <>
      {/* Background Overlay */}
      <div className="fixed inset-0 bg-black opacity-50 z-20" onClick={onClose}></div>

      {/* Modal Content */}
      <div className="fixed inset-0 flex justify-center items-center z-30">
        <div className="bg-white p-6 rounded-lg w-1/2">
          <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
          <form>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Your Message"
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-gray-600 text-white px-4 py-2 rounded mr-2"
                onClick={onClose}
              >
                Close
              </button>
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

// Main App Component
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <button
        onClick={openModal}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg"
      >
        Contact Me
      </button>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
