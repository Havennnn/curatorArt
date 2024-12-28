import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';


const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16 pointer-events-none'>
        <img src={aboutSvg} className='w-full h-80 pointer-events-none' />
        <article>
          <SectionTitle text='About Me' />
          <p className='text-black mt-8 leading-loose'>
          I am committed to creating visually appealing and user-friendly digital experiences. My expertise spans across modern web technologies, including HTML5, CSS3, JavaScript, and popular frameworks like React and Tailwind. Additionally, I’m also skilled in server-side technologies like Node.js.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
