import Hero from "./Components/Hero.jsx";
import Divider from "./Components/Divider.jsx";
import Navbar from "./Components/Navbar.jsx";
import History from "./Components/History.jsx";
import Events from "./Components/Events.jsx";
import Gallery from "./Components/Gallery.jsx";
import GallerySlider from "./Components/GallerySlider.jsx";
import Product from "./Components/Product.jsx";
import Footer from "./Components/Footer.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Divider />
      <History />
      <Events />
      <Gallery />
      <GallerySlider />
      <Product />
      <Footer />
    </>
  );
};
export default App;
