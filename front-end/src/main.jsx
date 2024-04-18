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
import RecipeDisplay from './pages/RecipeDisplay.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import ContactPage from './pages/ContactPage.jsx'

const router = createBrowserRouter([
  {
  path: '/' , 
  element: <Layout/>,
  errorElement: <ErrorPage/>,
  children: [
    {path: "", element: <LandingPage/>},
    {path: "login", element: <Login/>},
    {path: "signup", element: <Signup/>},
    {path: "contact", element: <ContactPage/>},
    {path: "fetch/:id", element: <Fetch/>},
    {path: "categories/cuisines", element: <Cuisines/>},
    {path: "categories/:type/:category", element: <RecipeDisplay/>},
  ]
  }
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
