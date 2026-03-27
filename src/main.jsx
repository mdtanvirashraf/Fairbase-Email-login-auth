import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Leout/Root.jsx';
import Home from './Component/Home.jsx';
import Rejester from './Component/Rejester.jsx';
import Log_In from './Component/Log_In.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true, Component: Home
      },
      {
        path: "/rejester", Component: Rejester
      },
      {
        path: "/app", Component: App
      },
      {
        path: "/login", Component: Log_In
      }
    ]
  }

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
