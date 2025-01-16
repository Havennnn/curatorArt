import { useState } from 'react';
import heroImg from '../assets/hero.svg';
import resume from '../assets/resume.pdf';
import './design.css';

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation check
    if (!name || !email || !message) {
      setError('All fields are required!');
      return;
    }

    console.log('Form submitted with:', { name, email, message });

    setIsSubmitted(true);

    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-50 z-20" onClick={onClose}></div>

      <div className="fixed inset-0 flex justify-center items-center z-30">
        <div className="bg-white p-6 rounded-lg w-full max-w-md sm:max-w-lg md:max-w-3xl">
          {!isSubmitted ? (
            <>
              <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
              <form onSubmit={handleSubmit}>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>} {/* Show error message if any */}
                
                <div className="mb-4">
                  <label className="block mb-2" htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
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
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
              <p className="text-lg mb-4">Thank you for reaching out! I'll get back to you as soon as possible.</p>
              <div className="flex justify-end">
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='bg-gradient-to-b from-[#1F3A71] to-[#FFFFFF]' id="home">
      <div className='align-element grid md:grid-cols-2 items-center sm:py-20'>
        <article>
          <p className='pt-40 sm:pt-10 text-2x1 font-bold text-[#0C1830] capitalize tracking-wide'>
            WELCOME TO THE ART WORLD!
          </p>
          <p className='text-7xl font-bold text-white tracking-wider pointer-events-none shadow-none shadow'>We are Curator<span className='text-[#0C1830]'>Art</span></p>
          <p className='text-3xl font-bold text-[#0C1830] capitalize tracking-wide'>
            Art Curator & Enthusiast
          </p>
          <p className='text-[1em] text-lg text-white capitalize tracking-wide pointer-events-none shadow-none shadow'>
          As an art curator with a deep passion for creativity, I seek to preserve and showcase the beauty of art. I specialize in organizing exhibitions, promoting artists, and fostering a deeper understanding of art in all its forms, from traditional to contemporary.
          </p>
          <div className='flex gap-x-8 w-full pt-5 md:pb-10 items-center'>
            <div
              onClick={openModal}
              className='p-4 text-white font-bold bg-[#0C1830] hover:cursor-pointer hover:text-[#2A4D93] hover:bg-white duration-300 w-1/3 text-center boxshadow rounded-xl hover:scale-105 transform'
            >
              Contact Us
            </div>

            <div
              onClick={() => window.open(resume, '_blank')}
              className='p-3 text-[#0C1830] font-bold bg-transparent hover:cursor-pointer border border-[#0C1830] hover:text-[#2A4D93] hover:bg-white duration-300 w-[30%] text-center rounded-xl hover:scale-105 transform'
            >
              Gallery
            </div>


          </div>
        </article>
        <article className='hidden md:block'>
          <img src={heroImg} className='h-auto max-h-[600px] lg:h-[600px] float-right pointer-events-none' />
        </article>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Hero;
