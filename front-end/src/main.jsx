import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import LandingPage from './components/LandingPage.jsx'
import Login from './components/Login/Login.jsx'
import Signup from './components/Signup/Signup.jsx'

const router = createBrowserRouter([
  {
  path: '/' , 
  element: <Layout/>,
  children: [
    {path: "", element: <LandingPage/>},
    {path: "login", element: <Login/>},
    {path: "signup", element: <Signup/>},
    
  ]

  }
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
