import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import LandingPage from './pages/LandingPage.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Fetch from './components/Fetch.jsx'
import Cuisines from './pages/Categories/Cuisines.jsx'

const router = createBrowserRouter([
  {
  path: '/' , 
  element: <Layout/>,
  children: [
    {path: "", element: <LandingPage/>},
    {path: "login", element: <Login/>},
    {path: "signup", element: <Signup/>},
    {path: "fetch", element: <Fetch/>},
    {path: "categories/cuisines", element: <Cuisines/>},
    
  ]

  }
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
