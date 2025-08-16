import React from 'react';
import './App.scss';
import { RouterProvider } from 'react-router-dom';
import { routes } from './config/Routes';
import 'boxicons/css/boxicons.min.css';

function App() {
   
  
  return (
    <div  >
       <RouterProvider router={routes}/>
    </div>
  );
}

export default App;
