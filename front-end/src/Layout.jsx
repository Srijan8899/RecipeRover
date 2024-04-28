import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import UserContextProvider from './components/Context/UserContext'
import { Toaster } from 'react-hot-toast';
import LocomotiveScroll from 'locomotive-scroll';

function Layout() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
    <UserContextProvider>
    <Toaster/>
    <Header/>
    <Outlet/>
    <Footer/>
    </UserContextProvider>
    </>
  )
}

export default Layout