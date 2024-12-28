import { FaGithubSquare, FaLinkedin, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-[#0C1830] py-10'>
      <div className='align-element grid md:grid-cols-2 items-center gap-8'>
        <article className='flex flex-col gap-y-2'>
                <p className='text-white font-bold'>Contact Me</p>
                <a className='flex flex-row gap-2 text-white'><FaEnvelope className='h-7 w-7 text-white' /> marablelatrell@gmail.com</a>
                <a className='flex flex-row gap-2 text-white'><FaPhoneAlt className='h-7 w-7 text-white' /> 09953324941</a>
        </article>
        <article className='block'>
            <div className='flex gap-x-5 md:float-right '>
                <FaGithubSquare className='h-10 w-10 text-white hover:text-black duration-300 hover:cursor-pointer' />
                <FaLinkedin className='h-10 w-10 text-white hover:text-black duration-300 hover:cursor-pointer' />
            </div>
        </article>
      </div>
    </div>
  );
};
export default Footer;
