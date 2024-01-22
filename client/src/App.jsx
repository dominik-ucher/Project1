import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import References from "./pages/References";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sitemap from "./online/sitemap.xml"


const Layout = () =>{
  return (
    <>
    <div className="bg-gray-100">
    <Navbar />
    <Outlet />
    <Footer />
    </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/references",
        element:<References/>,
      },
      {
        path:"/sitemap",
        element:<Sitemap/>,
      },
    ]
  },
  // {
  //   path: "/login",
  //   element: <Login/>,
  // },
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}



export default App;
