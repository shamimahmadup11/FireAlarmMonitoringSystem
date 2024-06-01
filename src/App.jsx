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
        <h1 className="text-3xl font-bold m-10 text-center">Team Profiles</h1>

        <div className="flex justify-around">
          <TeacherProfile
            photo="https://res.cloudinary.com/recsfaculty/image/upload/v1690826665/profilePhotoUploads/yenu2gitzwhv5jkbjbn3.jpg"
            name="Dean"
            title="Dean of the Department"
            education="Ph.D. in Electronics Engineering"
          />
          <TeacherProfile
            photo="https://res.cloudinary.com/recsfaculty/image/upload/v1690827289/profilePhotoUploads/deje7qkdx1krnxylnpz5.jpg"
            name="Project Manager"
            title="Assistant Professor"
            education="M.Tech , IIT Rorkee"
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
          <Footer />
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
