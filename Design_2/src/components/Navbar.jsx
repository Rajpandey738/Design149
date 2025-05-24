import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className=" text-white py-5 px-8 md:px-[50px] lg:px-[100px]">
      <div className="flex justify-between items-center">
        <div>
          <img src={logo} alt="" className="w-[70px] h-[60px]" />
        </div>

        <div className="hidden sm:flex gap-16 items-center">
          <ul className="flex gap-15">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <select name="" id="">
                <option value="">Pages</option>
                <option value="">Page1</option>
                <option value="">Page2</option>
              </select>
            </li>
          </ul>
          <button className=" px-4 py-2 border border-white cursor-pointer rounded-[60px]">
            Contact Us
          </button>
        </div>

        {/* Hamburger menu......  */}

        <button className=" sm:hidden mr-6 p-1 border-2 rounded-[10px] ">
          <i className="ri-menu-line text-2xl"></i>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
