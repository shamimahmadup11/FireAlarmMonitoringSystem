
import Navbar from './Components/Navbar';
import FireAlarmPage from './Components/FireAlarmPage';
import TeacherProfile from './Components/TeacherProfile';
import AboutProject from './Components/About';
import Footer from './Components/Footer';
const App = () => {
  return (
    <div>
      <Navbar />
     
      <div className="container mx-auto p-4">
          <AboutProject />

        <h1 className="text-3xl font-bold mb-4">Team Profiles</h1>

        <div className="flex justify-between">
          <TeacherProfile
            photo="https://res.cloudinary.com/recsfaculty/image/upload/v1690826665/profilePhotoUploads/yenu2gitzwhv5jkbjbn3.jpg"
            name="Dean"
            title="Dean of the Department"
            education="Ph.D. in Electrical Engineering"
          />
          {/* <TeacherProfile
            photo="https://res.cloudinary.com/recsfaculty/image/upload/v1690826665/profilePhotoUploads/yenu2gitzwhv5jkbjbn3.jpg"
            name="Himanshu Katiyar"
            title="HOD"
            education=""
          /> */}
          <TeacherProfile
            photo="https://res.cloudinary.com/recsfaculty/image/upload/v1690827289/profilePhotoUploads/deje7qkdx1krnxylnpz5.jpg"
            name="Project Manager"
            title="Assistant Professor"
            education="M.Tech , IIT Rorkee"
          />
        </div>
       
      </div>
      <FireAlarmPage/>
      <Footer/>
    </div>
  );
};

export default App;
