import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="w-[100%] h-[70vh] bg-[url('assets/contact.jpg')] bg-center bg-cover">
      <Navbar />
      <div className="text-center mt-[100px] text-white">
        <h1 className="text-[65px] sm:text-[80px] font-semibold">Contact Us</h1>
        <p>Home / Contact</p>
      </div>
    </div>
  );
};

export default Hero;
