import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import TrustSection from "./components/TrustSection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <TrustSection />
      <CTA />
      <Contact />
      <footer />
    </>
  );
}

export default App;