import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold">Fire Alarm Monitoring System</h2>
          <p className="mt-2 text-sm">Stay safe with our advanced fire detection and monitoring solution.</p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul className="text-sm">
              <li><a href="#" className="text-white hover:underline">Home</a></li>
              <li><a href="#" className="text-white hover:underline">About</a></li>
              <li><a href="#" className="text-white hover:underline">Services</a></li>
              <li><a href="#" className="text-white hover:underline">Contact</a></li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Resources</h3>
            <ul className="text-sm">
              <li><a href="#" className="text-white hover:underline">FAQs</a></li>
              <li><a href="#" className="text-white hover:underline">Blog</a></li>
              <li><a href="#" className="text-white hover:underline">Documentation</a></li>
            </ul>
          </div>
        </div>
        <div className="text-sm">
          <p>&copy; {new Date().getFullYear()} Fire Alarm Monitoring System</p>
          <p>All rights reserved.</p>
          <p>Designed and Developed by Your Company</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
