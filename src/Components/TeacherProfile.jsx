import { motion } from "framer-motion";

const TeacherProfile = ({ photo, name, title, education }) => {
  return (
    <motion.div
      className="bg-white shadow-md rounded p-4 m-2 md:w-1/3 lg:w-1/4"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.img
        src={photo}
        alt={`${name}`}
        className="w-32 h-32 rounded-full mx-auto mb-2 md:w-24 md:h-24 lg:w-32 lg:h-32"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      />
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">{title}</p>
        <p className="text-gray-600">{education}</p>
      </motion.div>
    </motion.div>
  );
};

export default TeacherProfile;
