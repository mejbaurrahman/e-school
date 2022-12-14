import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layouts/Main';
import Home from './Pages/Home/Home';
import Faq from './Pages/Faq/Faq';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Courses from './Pages/Courses/Courses';
import Blog from './Pages/Blog/Blog';
import NotFound from './Layouts/NotFound';
import PrivateRoute from './routers/PrivateRoute';
import CourseByCategory from './Pages/CourseByCategory/CourseByCategory';
import ShowCourses from './Componants/ShowCourses/ShowCourses';
import { useContext } from 'react';
import { AuthContext } from './Hooks/AuthProvider/AuthProvider';
import CourseDetail from './Componants/CourseDetail/CourseDetail';
import Checkout from './Pages/Checkout/Checkout';
import Profile from './Pages/Profile/Profile';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        loader: ()=>fetch('https://e-school-server-nine.vercel.app/courses'),
        element:<Home></Home>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/faq',
        element:<Faq></Faq>
      },
      {
        path:'/profile',
        element:<Profile></Profile>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/courses',
       loader: ()=>fetch('https://e-school-server-nine.vercel.app/courses'),
        element:<Courses></Courses>,
        children:[
          {
            path:'/courses',
            loader: ()=>fetch('https://e-school-server-nine.vercel.app/courses'),
            element:<ShowCourses></ShowCourses>
          },
          {
            path:'/courses/category/:id',
            loader: ({params})=> {
              console.log(params);
              return fetch(`https://e-school-server-nine.vercel.app/courses/${params.id}`);
            },
            element:<CourseByCategory></CourseByCategory>
          },
          {
            path:'/courses/:id',
            loader: ({params})=> {
              console.log(params);
              return fetch(`https://e-school-server-nine.vercel.app/course/${params.id}`);
            },
            element:<CourseDetail></CourseDetail>
          }
        ]
      },
      {
        path:'/checkout/:id',
        loader: ({params})=> {
          return fetch(`https://e-school-server-nine.vercel.app/course/${params.id}`);
        },
        element:<PrivateRoute><Checkout></Checkout></PrivateRoute>
        
      }
    ]
  },
  {
    path:'*',
    element:<NotFound></NotFound>
  }
])
function App() {
  const {dark} = useContext(AuthContext);
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
