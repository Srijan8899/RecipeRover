import React, { useState, useEffect } from 'react'

function Hero() {
  const [isMobile, setIsMobile] = useState(false);
 // Adjust breakpoint as needed

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth < 768; // Adjust breakpoint as needed
      setIsMobile(newIsMobile);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function to avoid memory leaks
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const backgroundImage = isMobile ? 'https://res.cloudinary.com/recipe-rover/image/upload/v1718873213/assets/mobile-bg2_tqesyf.jpg' : 'https://res.cloudinary.com/recipe-rover/image/upload/v1718800652/assets/menu1_bqhvrj.jpg';

  return (

    <div data-scroll data-scroll-section data-scroll-speed="-.3" className={`w-full h-screen bg- brightness-90 bg-cover bg-center overflow-hidden ${
      isMobile ? 'bg-mobile-image' : 'bg-desktop-image'
    }`}
     style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="h-[50%] flex flex-col">
        <h1 className=" uppercase text-[12vh] md:text-[26vw] flex items-end justify-center mt-80 md:mt-52 z-3 font-['Founders_Grotesk_X_Condensed'] font-light text-[#F8FAE5] leading-[.6] -mb-[.6vw] text-nowrap"> recipe rover </h1>
        <div className="flex uppercase justify-end items-center pr-16 md:px-40 gap-1 md:gap-3 font-['Neue_Montreal'] font-bold">
        <p className="md:text-2xl text-md text-nowrap text-black">More than just a </p>
        <p className="md:text-2xl text-md text-nowrap md:text-[#F8FAE5] text-black">Recipe App</p> </div>
        <div className="w-full flex item-center justify-center mx-32">
        <img src="https://res.cloudinary.com/recipe-rover/image/upload/v1718800736/assets/logo_z1yvrp.png" alt="logo"  className="bg-transparent object-scale-down w-52 py-3 hidden md:block"/> </div>
        </div>
    </div> 
  )
}

export default Hero
