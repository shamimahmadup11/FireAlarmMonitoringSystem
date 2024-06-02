// import React from 'react';
import image1 from "../assets/Images/you.jpg";
import image2 from '../assets/Images/second.jpeg';
import image3 from '../assets/Images/Third.jpeg';
import image4 from '../assets/Images/Third2.jpg';

const About = () => {
  return (
    <div className="p-6 bg-gray-100 flex flex-col">
      <div>
        Images content of project
      </div>
      <div className="flex flex-wrap justify-center md:justify-between gap-6">
        <img src={image1} alt="Image 1" className="w-full md:w-[45vw] h-[40vh] md:h-[90vh] object-cover rounded-lg shadow-md" />
        <img src={image2} alt="Image 2" className="w-full md:w-[45vw] h-[40vh] md:h-[90vh] object-cover rounded-lg shadow-md" />
        <img src={image3} alt="Image 3" className="w-full md:w-[45vw] h-[40vh] md:h-[90vh] object-cover rounded-lg shadow-md" />
        <img src={image4} alt="Image 4" className="w-full md:w-[45vw] h-[40vh] md:h-[90vh] object-cover rounded-lg shadow-md" />
      </div>
    </div>
  );
};

export default About;
