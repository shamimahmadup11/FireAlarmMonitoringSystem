

const TeacherProfile = ({ photo, name, title, education }) => {
  return (
    <div className="bg-white shadow-md rounded p-4 m-2 md:w-1/3 lg:w-1/4">
      <img src={photo} alt={`${name}`} className="w-32 h-32 rounded-full mx-auto mb-4 md:w-full" />
      <div className="text-center">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">{title}</p>
        <p className="text-gray-600">{education}</p>
      </div>
    </div>
  );
};

export default TeacherProfile;
