import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id='footer' className="bg-[#0b0b0b] dark:bg-white w-full mx-auto  mt-5 text-gray-400 dark:text-zinc-800 py-10 lg:px-5 sm:px-5 xsm:px-1">
      <div className="container mx-auto flex xsm:flex-col sm:flex-row lg:flex-row xsm:flex-wrap lg:flex-nowrap justify-between items-start">
        <div className="lg:w-[30vw] md:w-[30vw] xsm:w-full sm:w-1/2 mb-6 sm:mb-0">
          <h2 className="text-white dark:text-black text-xl font-semibold mb-4">TechVista</h2>
          <p className="lg:text-sm xsm:text-[0.8em] sm:text-[0.7em] ">
            Your one-stop shop for the latest electronic gadgets.<br /> From smartphones to smart home devices, find it all at TechVista.
          </p>
        </div>

        <div className="lg:px-8 sm:px-8 xsm:px-1 lg:w-[25vw] lg:sm:w-1/3 mb-6 sm:mb-0">
          <h3 className="text-white dark:text-black text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="lg:text-sm xsm:text-[0.8em] sm:text-[0.7em] space-y-2 flex flex-col ">
            <NavLink to="/" className="hover:text-white dark:hover:text-[#3ad611] duration-100 hover:font-semibold">Home</NavLink>
            <NavLink to="product" className="hover:text-white dark:hover:text-[#3ad611] duration-100 hover:font-semibold">Product</NavLink>
            <NavLink to="cart" className="hover:text-white dark:hover:text-[#3ad611] duration-100 hover:font-semibold">Cart</NavLink>
            


          </ul>
        </div>

        <div className="lg:w-[25vw] lg:sm:w-1/3 mb-6 sm:mb-0">
          <h3 className="text-white dark:text-black text-lg font-semibold mb-4">Get in Touch</h3>
          <ul className="lg:text-sm xsm:text-[0.8em] sm:text-[0.7em] space-y-2">
            <li><a href="mailto:support@techvista.com" className="hover:text-white dark:hover:text-[#3ad611] duration-100 hover:font-semibold">support@techvista.com</a></li>
            <li><a href="tel:+11234567890" className="hover:text-white dark:hover:text-[#3ad611] duration-100 hover:font-semibold">+1 (123) 456-7890</a></li>
            
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center lg:text-sm xsm:text-[0.8em] sm:text-[0.7em] text-gray-500">
        <p>&copy; 2024 TechVista. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
