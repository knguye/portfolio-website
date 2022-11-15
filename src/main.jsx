import React from 'react'
import ReactDOM from 'react-dom/client'
import Root  from './routes/root'
import About from './routes/about'
import Projects from './routes/projects'
import Resume from './routes/resume'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"
import './styles/index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <div>404 Page not found.</div>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/projects",
    element: <Projects/>,
    /*
    children: [
      {
        path: "/greenhouse-robot",
      },
    ] */
  },
  {
    path: "/resume",
    element: <Resume/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
