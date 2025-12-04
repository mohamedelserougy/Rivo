import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import NavBarLogin from "./Components/Uitily/NavBarLogin";
import HomePage from "./Pages/Home/Home";
import LoginPage from "./Pages/Auth/LoginPage";
import Register from "./Pages/Auth/RegisterPage";
import AllCategoryPage from "./Pages/Category/AllCategoryPage";
import AllBrand from "./Pages/Brand/AllBrand";
import ShopProductsPage from "./Pages/products/ShopProductsPage";
import ProductDetalisPage from "./Pages/products/ProductDetalisPage";
import CartPage from "./Pages/Cart/CartPage";

function App() {
  const routes = createBrowserRouter([
    { path: "/home", element: <HomePage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/register", element: <Register /> },
    { path: "/allcategory", element: <AllCategoryPage /> },
    { path: "/allbrand", element: <AllBrand /> },
    { path: "/allproducts", element: <ShopProductsPage /> },
    { path: "/products/:id", element: <ProductDetalisPage /> },
    { path: "/cart", element: <CartPage /> },
  ]);

  return (
    <>
      <NavBarLogin />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
