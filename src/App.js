import logo from './logo.svg';
import './App.css';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Leftbar from "./components/leftbar/Leftbar";
import Rightbar from "./components/rightbar/Rightbar";
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";

function App() {

  function Layout(){
    return(
      <div>
        <NavBar />
        <div style={{display : "flex"}}>
          <Leftbar />
          <Outlet />
          <Rightbar />
        </div>
      </div>
    );
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
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
