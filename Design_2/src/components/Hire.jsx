import React from "react";

const Hire = () => {
  return (
    <div className="px-8 md:px-[50px] lg:px-[100px] py-[50px]">
      <div className="flex flex-col items-center bg-[url('assets/hire.avif')] bg-center bg-cover ">
        <p className="text-[25px] font-semibold capitalize">Hire Us Now</p>
        <h1 className="text-[50px] font-semibold capitalize text-center md:w-[80%] lg:w-[60%] leading-[55px]">
          We are always ready to take a perfect shot
        </h1>
        <button className="bg-white text-black px-5 py-2.5 my-10 cursor-pointer border-none rounded-[60px]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hire;
