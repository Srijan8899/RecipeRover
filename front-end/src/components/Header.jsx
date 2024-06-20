import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from '../assets/logo.png';
import { UserContext } from "./Context/UserContext";
import toast from "react-hot-toast";
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Initialize isMenuOpen to false
  const { isLoggedIn, setIsLoggedIn, loggedout } = useContext(UserContext);

  const links = [
    { name: "Home", path: "/" },
    { name: "Post Recipes", path: "/user/postrecipe" },
    { name: "Community", path: "/user/viewrecipe" },
    { name: "Recipe Books", path: "/community/user/books" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsHidden(prevScrollPos < currentScrollPos && currentScrollPos > 100);
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
    toast.success("Logged out successfully");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Default Navbar */}
      <nav style={{ display: isHidden ? 'none' : 'block' }}>
        <div className="fixed z-[5] w-full px-3 md:px-12 flex justify-between items-center backdrop-blur-[3px] text-[#F8FAE5]">
          <div className="logo flex gap-5">
            <img src={Logo} alt="logo" className="bg-transparent w-12 md:w-20 py-3" />
          </div>
          <div className="hidden md:flex links gap-5 py-10 ml-56">
            {links.map(({ name, path }, index) => (
              <NavLink to={path} key={index} className={({ isActive }) => `text-lg font-light font-['Neue_Montreal'] ${isActive ? "underline" : ""}`}>
                {name}
              </NavLink>
            ))}
          </div>
          {isLoggedIn ? (
            <Link to="/" onClick={clickHandler} className="hidden md:block">
              <div className="button -mt-2 border rounded-xl p-4 uppercase text-sm leading-[.6] bg-[#43766C]"> Logout</div>
            </Link>
          ) : (
            <Link to="/login" className="hidden md:block">
              <div className="button -mt-2 border rounded-xl p-4 uppercase text-sm leading-[.6] bg-[#43766C]"> Login/ Signup</div>
            </Link>
          )}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-3xl">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Navbar */}
      {isMenuOpen && (
        <div className={`fixed top-0 left-0 w-full h-full bg-[#43766C] flex flex-col items-center justify-center z-10 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'menu-open' : 'menu-close'}`}>
          <button onClick={closeMenu} className="absolute top-5 right-5 text-3xl text-[#F8FAE5]">
            <FaTimes />
          </button>
          {links.map(({ name, path }, index) => (
            <NavLink
              to={path}
              key={index}
              className="text-2xl font-light font-['Neue_Montreal'] mb-4"
              onClick={closeMenu}
            >
              {name}
            </NavLink>
          ))}
          {isLoggedIn ? (
            <Link to="/" onClick={() => { clickHandler(); closeMenu(); }}>
              <div className="button mt-4 border rounded-xl p-4 uppercase text-lg leading-[.6] bg-[#F8FAE5] text-[#43766C]"> Logout</div>
            </Link>
          ) : (
            <Link to="/login" onClick={closeMenu}>
              <div className="button mt-4 border rounded-xl p-4 uppercase text-lg leading-[.6] bg-[#F8FAE5] text-[#43766C]"> Login/ Signup</div>
            </Link>
          )}
        </div>
      )}

      {/* Styles for Fullscreen Navbar Animation */}
      <style jsx="true">
        {`
          .menu-open {
            animation: fadeInSlideIn 0.5s forwards;
          }

          .menu-close {
            animation: fadeOutSlideOut 0.5s forwards;
          }

          @keyframes fadeInSlideIn {
            0% {
              opacity: 0;
              transform: translateX(100%);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeOutSlideOut {
            0% {
              opacity: 1;
              transform: translateX(0);
            }
            100% {
              opacity: 0;
              transform: translateX(100%);
            }
          }
        `}
      </style>
    </>
  );
};

export default Header;
