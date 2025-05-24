import React from "react";
import map from "../assets/map.png";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 px-8 md:px-[50px] lg:px-[100px] py-[100px]">
      <div className="basis-1/2 bg-zinc-900 p-10">
        <h3 className="text-[25px] font-semibold">Contact Us</h3>
        <h1 className="text-[45px] font-semibold">Get In Touch</h1>
        <form action="#">
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Your Name..."
            className="bg-zinc-700 text-[#ffff] font-bold w-[100%] text-[12px] p-2.5 border mt-2.5 mb-4"
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="example@email.com"
            className="bg-zinc-700 text-[#ffff] font-bold w-[100%] text-[12px] p-2.5 border mt-2.5 mb-4"
          />
          <label htmlFor="">Subject</label>
          <input
            type="text"
            placeholder="Title..."
            className="bg-zinc-700 text-[#ffff] font-bold w-[100%] text-[12px] p-2.5 border mt-2.5 mb-4"
          />
          <label htmlFor="">Message</label>
          <textarea
            name=""
            id=""
            rows="6"
            placeholder="Type here..."
            className="bg-zinc-700 text-[#ffff] font-bold w-[100%] text-[12px] p-2.5 border mt-2.5 mb-4"
          />
          <button className="cursor-pointer text-[#ffff] font-bold w-[100%] text-[12px] py-3.5 border mt-2.5 mb-4 rounded-[60px]">
            Send Now
          </button>
        </form>
      </div>
      <div className="basis-1/2 pt-10 md:p-10">
        <p className="text-[15px] mb-8 text-white/80">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
          corporis optio impedit ea quasi nesciunt vitae? Enim, itaque aliquam,
          ipsam odio, placeat aut quas illo perspiciatis dolor beatae impedit
          et!
        </p>
        <div className="grid grid-cols-2 text-center gap-2 mb-8">
          <div className="mb-5">
            <i className="ri-phone-line text-[45px]"></i>
            <h1 className="text-[18px] font-bold">Phone Number</h1>
            <p>+61 4338237343</p>
          </div>
          <div className="mb-5">
            <i className="ri-mail-line text-[45px]"></i>
            <h1 className="text-[18px] font-bold">Email Address</h1>
            <p>example@email.com</p>
          </div>
          <div>
            <i className="ri-whatsapp-line text-[45px]"></i>
            <h1 className="text-[18px] font-bold">Whatsapp</h1>
            <p>8907237343</p>
          </div>
          <div>
            <i className="ri-map-pin-line text-[45px]"></i>
            <h1 className="text-[18px] font-bold">Our Office</h1>
            <p>24423 indrapuri sector c</p>
          </div>
        </div>

        <img src={map} alt="" className=" w-full h-[200px]" />
      </div>
    </div>
  );
};

export default Contact;
