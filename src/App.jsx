import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import NavBarLogin from "./Components/Uitily/NavBarLogin";
import HomePage from "./Pages/Home/Home";
import LoginPage from "./Pages/Auth/LoginPage";
import Register from "./Pages/Auth/RegisterPage";
import AllCategoryPage from "./Pages/Category/AllCategoryPage";

function App() {
  const routes = createBrowserRouter([
    { path: "/home", element: <HomePage /> },
    { path: "login", element: <LoginPage /> },
    { path: "/register", element: <Register /> },
    { path: "/allcategory", element: <AllCategoryPage /> },
  ]);

  return (
    <>
      <NavBarLogin />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
