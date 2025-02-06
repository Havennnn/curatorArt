import About from "./Components/About.jsx";
import Hero from "./Components/Hero.jsx";
import Divider from "./Components/Divider.jsx";
import Navbar from "./Components/Navbar.jsx";
import Projects from "./Components/Projects.jsx";
import History from "./Components/History.jsx";
import Events from "./Components/Events.jsx";
import Footer from "./Components/Footer.jsx";

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
