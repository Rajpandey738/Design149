import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className=" bg-zinc-900 px-8 md:px-[50px] lg:px-[100px] py-[70px]">
      <div className="lg:flex gap-16">
        <div className="basis-1/2 mb-8 lg:mb-0">
          <img src={logo} alt="" className="w-[70px] h-[60px] mb-4" />
          <p className="mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
            unde iste quisquam minima repudiandae accusamus dolorum sequi qui
            labore!
          </p>
          <div className="mt-4">
            <a
              href=""
              className=" bg-white px-1.5 py-1 mr-2 text-black rounded-[50px]"
            >
              <i className="ri-facebook-circle-fill text-black"></i>
            </a>
            <a
              href=""
              className=" bg-white px-1.5 py-1 mx-2 text-black rounded-[50px]"
            >
              <i className="ri-twitter-fill text-black"></i>
            </a>
            <a
              href=""
              className=" bg-white px-1.5 py-1 mx-2 text-black rounded-[50px]"
            >
              <i className="ri-youtube-fill text-black"></i>
            </a>
          </div>
        </div>
        <div className="basis-1/2 sm:flex lg:justify-around gap-16 lg:gap-0">
          <div className="mb-8 sm:mb-0">
            <ul>
              <h1 className="text-2xl font-semibold mb-3">Our Store</h1>
              <li className="mb-3">Home</li>
              <li className="mb-3">About</li>
              <li className="mb-3">Service</li>
              <li className="mb-3">Contact</li>
            </ul>
          </div>
          <div>
            <ul>
              <h1 className="text-2xl font-semibold mb-4">Get In Touch</h1>
              <li className="mb-3">
                <i class="ri-map-pin-fill mr-2"></i> 24423 indrapuri sector c
              </li>
              <li className="mb-3">
                <i class="ri-phone-fill mr-2"></i> 872-9130-152
              </li>
              <li className="mb-3">
                <i class="ri-whatsapp-fill mr-2"></i> 9924174513
              </li>
              <li className="mb-3">
                <i class="ri-mail-fill mr-2"></i> support@email.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <p>Copyright &copy; 2023 vigraph | Powered By vigraph</p>
      </div>
    </footer>
  );
};

export default Footer;
