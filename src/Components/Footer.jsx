import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6  bottom-0">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold">Fire Alarm Monitoring System</h2>
          <p className="mt-2 text-sm">Stay safe with our advanced fire detection and monitoring solution.</p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end">
          
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Created by :</h3>
            <ul className="text-sm">
              <li><a href="#" className="text-white hover:underline">Aadars Gautam</a></li>
              <li><a href="#" className="text-white hover:underline">Prateek Yadav</a></li>
              <li><a href="#" className="text-white hover:underline">Sanat mishra</a></li>
              <li><a href="#" className="text-white hover:underline">Shamim Ahmad</a></li>
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
