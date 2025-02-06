import About from "./components/About";
import Hero from "./components/Hero";
import Divider from "./components/Divider";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import History from "./components/History";
import Events from "./components/Events";
import Footer from "./components/Footer";

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
