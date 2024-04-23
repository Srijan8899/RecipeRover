import React, { useContext } from "react";
import { useState, useEffect } from 'react';
import {Link, NavLink} from "react-router-dom";
import Logo from '../assets/logo.png'
import { UserContext } from "./Context/UserContext";

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const {isLoggedIn, setIsLoggedIn, loggedout} = useContext(UserContext);
  const links = [
    {name: "Home", path: "/"},
    {name: "Post Recipes", path: "/user/postrecipe"},
    {name: "Community", path: "/user/viewrecipe"},
    {name: "Recipe Books", path: "/recipebooks"},
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsHidden(prevScrollPos <  currentScrollPos && currentScrollPos > 100);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const clickHandler = () => {
    loggedout();
    setIsLoggedIn(false);
  }


  return (
    <nav style={{ display: isHidden ? 'none' : 'block'  }}>
    <div  className="fixed z-[5] w-full px-12 flex justify-between items-center backdrop-blur-[3px] text-[#F8FAE5]">
      <div className="logo flex gap-5">
       <img src={Logo} alt="logo"  className="bg-transparent object-scale-down w-20 py-3"/>
       {/* <img src="./src/assets/recipe-rover.png" alt="logo" className="bg-transparent object-scale-down w-48" /> */}
      </div>
      <div className="links flex gap-5 py-10 ml-56">
        {links.map(({name, path}, index) => (
          <NavLink to={path} key={index} className={({isActive}) => `text-lg font-light font-['Neue_Montreal'] ${isActive? "underline" : ""} `}>{name}</NavLink>
        ))}

      </div>
          {isLoggedIn?(
            <Link to="/" onClick={clickHandler}>
            <div className="button -mt-2 border rounded-xl p-4 uppercase text-sm leading-[.6] bg-[#43766C]"> Logout</div></Link>
              ):(
      <Link to="/login">
      <div className="button -mt-2 border rounded-xl p-4 uppercase text-sm leading-[.6] bg-[#43766C]"> Login/ Signup</div></Link>
          )
      }   
    </div>
    </nav>
  );
}


export default Header;
