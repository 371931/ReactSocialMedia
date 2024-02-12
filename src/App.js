import React,{useState} from 'react';
import './App.css';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Navigate
} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Leftbar from "./components/leftbar/Leftbar";
import Rightbar from "./components/rightbar/Rightbar";
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";

function App() {

  const [curUser,upUser] = useState(true);

  function Layout(){
    return(
      <div>
        <NavBar />
        <div style={{display : "flex", position:"relative", gap:"10px"}}>
          <Leftbar />
          <Outlet />
          <Rightbar />
        </div>
      </div>
    );
  }

  function ProtecedPage({children}){
    if(!curUser){
      return <Navigate to="/login"/>
    }

    return children
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtecedPage><Layout /></ProtecedPage>,
      children:[
        {
          path:"/",
          element: <Home />,
        },
        {
          path:"/profile/:id",
          element: <Profile />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
