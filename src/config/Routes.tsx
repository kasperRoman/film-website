import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layouts/Mainlayout";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Details from "../pages/Details";


export const routes = createBrowserRouter([
  {
    path: '/',
    element:<Mainlayout/> ,children:[
        {index:true , element:<Home/>},
        {path:'/:category' , element:<Catalog/>},
        {path:'/:category/search/:keyword' , element:<Catalog/>},
        {path:'/:category/:id' , element:<Details/>},

    ]
  }
]);


