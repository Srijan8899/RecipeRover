import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import UserContextProvider from './components/Context/UserContext'

function Layout() {
  return (
    <>
    <UserContextProvider>
    <Header/>
    <Outlet/>
    <Footer/>
    </UserContextProvider>
    </>
  )
}

export default Layout