import About from "./components/About.jsx";
import Hero from "./components/Hero.jsx";
import Divider from "./components/Divider.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import History from "./components/History.jsx";
import Events from "./components/Events.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Divider />
      <History />
      <Events />
      <About />
      <Projects />
      <Footer />
    </>
  );
};
export default App;
