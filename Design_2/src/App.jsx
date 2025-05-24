import React from "react";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Hire from "./components/Hire";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full text-white bg-black">
      <Hero />
      <Contact />
      <Hire />
      <Footer />
    </div>
  );
};

export default App;
