import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/main';
import Home from '../Page/Home/Home';
import Navbar from '../Layout/Navbar/Navbar';
import Footer from '../Layout/Footer/Footer';
import ErrorPage from '../Page/ErrorPage/ErrorPage';
import SigninPage from '../Page/SigninPage/SigninPage';
import SignupPage from '../Page/SignupPage/SignupPage';

const Routes = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
         {
          path:"/",
          element:<Home></Home>
         },
         {
          path:"/navbar",
          element:<Navbar></Navbar>
         },
         {
          path:"/footer",
          element:<Footer></Footer>
         },
         {
          path:"/signin",
          element:<SigninPage></SigninPage>
         },
         {
          path:"/signup",
          element:<SignupPage></SignupPage>
         },
        //  {
        //   path:"/button",
        //   element:<Buttons></Buttons>
        //  }

    
]
     
    },
    {
        path:"*",
        element:<ErrorPage></ErrorPage>
    } 
  
  ]);

export default Routes;