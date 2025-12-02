import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import NavBarLogin from "./Components/Uitily/NavBarLogin";
import HomePage from "./Pages/Home/Home";
import LoginPage from "./Pages/Home/Auth/LoginPage";
import Register from "./Pages/Home/Auth/RegisterPage";

function App() {
  const routes = createBrowserRouter([
    { path: "/home", element: <HomePage /> },
    { path: "login", element: <LoginPage /> },
    { path: "/register", element: <Register /> },
  ]);

  return (
    <>
      <NavBarLogin />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
