import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Resume from './components/Resume.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'


const router=createBrowserRouter([{
  path:'/',
  element:<App/>,
  children:[
    {
      path:'resume',
      element:<Resume/>
    }
  ]
}])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
