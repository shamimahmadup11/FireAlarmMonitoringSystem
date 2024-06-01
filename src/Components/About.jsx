import { motion } from 'framer-motion';

const AboutProject = () => {
  return (
    <motion.div
      id="about"
      className="bg-gray-100 p-4 mt-4 flex flex-col items-center md:flex-row md:items-start"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col justify-center md:mr-8">
      <div className="flex justify-center mt-auto">
        <motion.img
          src="https://mrperfectsolutions.in/assets/images/service/alarm-02.jpg"
          className="w-96 md:w-1/3 rounded-md shadow-lg"
          alt="Fire Alarm System"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </div>
        <h2 className="text-2xl font-bold mb-4 text-center md:text-left">About the Project</h2>
        <p className="text-center md:text-left">
          <span className="font-bold">The Fire Alarm System project</span> aims to provide a robust and reliable solution for detecting fires and alerting relevant authorities. When a fire is detected by the sensors, an alert is immediately displayed on the website, allowing for quick response and action.
          <br />
          <br />
          This system offers a range of features, including:
          <ul className="list-disc pl-6">
            <li>Real-time monitoring of fire hazards</li>
            <li>Immediate alerts via email, SMS, and website notifications</li>
            <li>Integration with emergency services for rapid response</li>
            <li>Dashboard for visualizing system status and historical data</li>
          </ul>
          <br />
          With its advanced technology and user-friendly interface, the Fire Alarm System project ensures the safety and security of buildings, helping to minimize damage and save lives.
        </p>
        <p className="text-center mt-4">
          <span className="font-bold">The Fire Alarm Monitoring System</span> is an advanced solution designed to enhance the safety and security of buildings by providing real-time monitoring and early detection of fire hazards. This system integrates state-of-the-art sensors and electronic components to detect smoke, heat, and flames, ensuring that any potential fire threats are identified promptly and accurately.
        </p>
      </div>
      
    </motion.div>
  );
};

export default AboutProject;
