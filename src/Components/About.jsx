import { motion } from 'framer-motion';

const AboutProject = () => {
  return (
    <motion.div
      id="about"
      className="bg-gray-100 p-6 mt-6 flex flex-col items-center md:flex-row md:items-start rounded-xl shadow-md "
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col justify-center md:mr-10">
      <h2 className="text-4xl font-bold mb-6   text-indigo-600 text-center">Fire Alarm Monitoring System</h2>
        <div className="flex justify-center mt-auto mb-6 md:mb-0">
          <motion.img
            src="https://mrperfectsolutions.in/assets/images/service/alarm-02.jpg"
            className="w-full md:max-w-lg rounded-xl shadow-xl m-10"
            alt="Fire Alarm System"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>
       
        <p className="text-md text-gray-700 text-center md:text-left leading-relaxed">
          <span className="font-bold">The Fire Alarm System project</span> aims to provide a robust and reliable solution for detecting fires and alerting relevant authorities. When a fire is detected by the sensors, an alert is immediately displayed on the website, allowing for quick response and action.
          <br />
          <br />
          This system offers a range of features, including:
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Real-time monitoring of fire hazards</li>
            <li>Immediate alerts via email, SMS, and website notifications</li>
            <li>Integration with emergency services for rapid response</li>
            <li>Dashboard for visualizing system status and historical data</li>
          </ul>
          <br />
          With its advanced technology and user-friendly interface, the Fire Alarm System project ensures the safety and security of buildings, helping to minimize damage and save lives.
        </p>
        <p className="text-md text-gray-700 text-center mt-4 leading-relaxed">
          <span className="font-bold">The Fire Alarm Monitoring System</span> is an advanced solution designed to enhance the safety and security of buildings by providing real-time monitoring and early detection of fire hazards. This system integrates state-of-the-art sensors and electronic components to detect smoke, heat, and flames, ensuring that any potential fire threats are identified promptly and accurately.
        </p>
      </div>
      
    </motion.div>
  );
};

export default AboutProject;
