

const TeacherProfile = ({ photo, name, title, education }) => {
  return (
    <div className="bg-white shadow-md rounded p-4 m-2 md:w-1/3 lg:w-1/4">
      <img src={photo} alt={`${name}`} className="w-32 h-32 rounded-full mx-auto mb-2 md:w-24 md:h-24 lg:w-32 lg:h-32" />
      <div className="text-center">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">{title}</p>
        <p className="text-gray-600">{education}</p>
      </div>
    </div>
  );
};

export default TeacherProfile;
