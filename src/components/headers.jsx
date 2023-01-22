import React from "react";
import stetoskop from '../assets/icons/stetoskop.svg'

function Headers() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-center">
        <div className="w-2/3 flex gap-x-36">
          <div className="flex">
            <img src={stetoskop} alt="" className="mr-3 h-8" />
            <h3 className="text-font-color font-bold text-xl">Holadok</h3>
          </div>
          <ul className="flex gap-x-9">
            <li className="w-20">
              <a className="transition-all hover:font-bold hover:text-font-color" href="#">Home</a>
            </li>
            <li  className="w-20">
              <a className="transition-all hover:font-bold hover:text-font-color" href="#">Features</a>
            </li>
            <li  className="w-20">
              <a className="transition-all hover:font-bold hover:text-font-color" href="#">Blog</a>
            </li>
            <li  className="w-20">
              <a className="transition-all hover:font-bold hover:text-font-color" href="#">About Us</a>
            </li>
          </ul>
        </div>
        <div className="w-1/3 flex justify-end items-center gap-x-8">
          <a href="">Login</a>
          <button className="border-2 border-primary-color py-1 px-4">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default Headers;
