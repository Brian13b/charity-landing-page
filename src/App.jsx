import Header from "./components/Header";
import Hero from "./components/Hero";
import Estadiostica from "./components/Estadisticas";
import Campana from "./components/Campana";
import About from "./components/About";
import Equipo from "./components/Equipo";
import Testimonio from "./components/Testimonio";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#F9F5E8]">
      <Header />
      <Hero />
      <Estadiostica />
      <Campana />
      <div className="border mx-35 my-4 border-gray-400"></div>
      <About />
      <Equipo />
      <Testimonio />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;

