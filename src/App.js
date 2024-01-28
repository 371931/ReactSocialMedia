import logo from './logo.svg';
import './App.css';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
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
