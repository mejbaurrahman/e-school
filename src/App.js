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

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
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
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/courses',
       loader: ()=>fetch('http://localhost:5000/courses'),
        element:<PrivateRoute><Courses></Courses></PrivateRoute>,
        children:[
          {
            path:'/courses',
            loader: ()=>fetch('http://localhost:5000/courses'),
            element:<ShowCourses></ShowCourses>
          },
          {
            path:'/courses/category/:id',
            loader: ({params})=> {
              console.log(params);
              return fetch(`http://localhost:5000/courses/${params.id}`);
            },
            element:<CourseByCategory></CourseByCategory>
          }
        ]
      },
    ]
  },
  {
    path:'*',
    element:<NotFound></NotFound>
  }
])
function App() {
  return (
   <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
