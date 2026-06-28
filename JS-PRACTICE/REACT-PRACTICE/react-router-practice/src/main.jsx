import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from "react";
import './index.css'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import User from './components/User/User.jsx';
import Github, {githubInfoLoader} from './components/Github/Github.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       }
//     ]
//   }
// ])

//2nd way to write router

const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path ='/' element = { <Layout/>}>
       <Route index element={<Home />} />

    {/* //<Route path ='' element = { <Home/>} /> */}
    <Route path ='home' element = { <Home/>} />
    <Route path ='about' element = { <About/>} />
    <Route path ='contact' element = { <Contact/>} />
    <Route path ='user/:userid' element = { <User/>} />
    <Route
    loader={githubInfoLoader}
     path ='github' 
     element = { <Github/>} 
     />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
);
