import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './Components/Navbar';

import TeacherProfile from './Components/TeacherProfile';
import AboutProject from './Components/About';
import Footer from './Components/Footer';
import Server from './Components/Server';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold m-10 text-center">Project Under Supervision  :</h1>

        <div className="flex justify-around flex-wrap gap-7">
          <TeacherProfile
            photo="https://res.cloudinary.com/recsfaculty/image/upload/v1690826665/profilePhotoUploads/yenu2gitzwhv5jkbjbn3.jpg"
            name="Dean"
            title="Dean of the Acedmics"
            education="Dr. Himanshu Katiyar Associate Professor"
          />
          <TeacherProfile
            photo="https://res.cloudinary.com/recsfaculty/image/upload/v1690826333/profilePhotoUploads/ii1xbdey4qvk13byo2hk.jpg"
            name="HOD"
            title="D.K. Tripathi"
            education=" Associate Professor"
          />

          <TeacherProfile
            photo="https://res.cloudinary.com/recsfaculty/image/upload/v1690827289/profilePhotoUploads/deje7qkdx1krnxylnpz5.jpg"
            name="Project Supervisor"
            title="Mr. Deepak Sigroha"
            education="Assistant Professor"
          />
           <TeacherProfile
            photo="https://res.cloudinary.com/recsfaculty/image/upload/v1690826802/profilePhotoUploads/fb1dlp3s0z6a2rm3ad82.jpg"
            name=""
            title="Dr. Abhinav Gupta"
            education="Assistant Professor"
          />
           <TeacherProfile
            photo="https://res.cloudinary.com/recsfaculty/image/upload/v1690827397/profilePhotoUploads/jdkrx3uji70mxws5kwxq.jpg"
            name=""
            title="Mr. Prashant panday"
            education="Assistant Professor"
          />
        </div>
      </div>
          <AboutProject />
          <Footer />
        </>
      )
    },
    {
      path: '/server',
      element: (
        <>
          <Navbar />
          <Server />
          {/* <Footer /> */}
        </>
      )
    }
  ]);

  return (
    <RouterProvider router={router}>
      

     
    </RouterProvider>
  );
};

export default App;
