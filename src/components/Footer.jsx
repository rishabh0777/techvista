import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0b0b0b] w-[95%] mx-auto rounded-3xl my-5 text-gray-400 py-10 lg:px-5 sm:px-5 xsm:px-1">
      <div className="container mx-auto flex xsm:flex-col sm:flex-row lg:flex-row xsm:flex-wrap lg:flex-nowrap justify-between items-start">
        <div className="lg:w-[30vw] xsm:w-full sm:w-1/3 mb-6 sm:mb-0">
          <h2 className="text-white text-xl font-semibold mb-4">TechVista</h2>
          <p className="lg:text-sm xsm:text-[0.8em] sm:text-[0.7em] ">
            Your one-stop shop for the latest electronic gadgets. <br /> From smartphones to smart home devices, find it all <br /> at TechVista.
          </p>
        </div>

        <div className="lg:px-8 sm:px-8 xsm:px-1 lg:w-[25vw] lg:sm:w-1/3 mb-6 sm:mb-0">
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="lg:text-sm xsm:text-[0.8em] sm:text-[0.7em] space-y-2 ">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Shop</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
          </ul>
        </div>

        <div className="lg:px-4 xsm:px-1 sm:px-4 lg:w-[25vw]  sm:w-1/3 mb-6 sm:mb-0">
          <h3 className="text-white text-lg font-semibold mb-4">Get in Touch</h3>
          <ul className="lg:text-sm xsm:text-[0.8em] sm:text-[0.7em] space-y-2">
            <li><a href="mailto:support@techvista.com" className="hover:text-white">support@techvista.com</a></li>
            <li><a href="tel:+11234567890" className="hover:text-white">+1 (123) 456-7890</a></li>
            <li>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </li>
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
