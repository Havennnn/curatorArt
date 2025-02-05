import About from "./components/About";
import Hero from "./components/Hero";
import Divider from "./components/Divider";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import History from "./components/History";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Divider />
      <History />
      <About />
      <Projects />
      <Footer />
    </>
  );
};
export default App;
