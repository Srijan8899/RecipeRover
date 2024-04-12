import React from 'react'
import { Link } from 'react-router-dom'

function JoinUs() {
  return (
    <div className="w-full h-screen overflow-hidden">
        <img src="./src/assets/table.jpg" alt="" className="absolute opacity-95 brightness-75 object-cover w-full h-full"/>
        <div className="top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] relative h-[80vh] w-[60vw] bg-transparent rounded-2xl backdrop-brightness-75 backdrop-blur-sm shadow-2xl"> 
        <div className="inset-0 relative flex flex-col ">
        <h1 className=" uppercase text-[14vh] flex items-end justify-center mt-28 z-3 font-['Founders_Grotesk_X_Condensed'] font-light text-[#F8FAE5] leading-none -mb-[.6vw]"> So, What are you waiting for? </h1>
        <div className="flex justify-end items-center px-40 gap-3 font-['Neue_Montreal']">
        <p className="text-2xl mt-7 text-[#F8FAE5] text-center">Join the culinary revolution today!<br/> Sign up now to unlock a world of endless recipe inspiration, community connection, and culinary creativity. Don't miss out on the ultimate cooking experience with Recipe Rover. Let's cook together! </p>
        </div>
        <Link to="/signup" className="flex mt-10 justify-center">
            <button className="border rounded-2xl px-10 py-5 text-2xl leading-[.6] bg-[#43766C] text-[#F8FAE5] uppercase tracking-tight font-['Neue_Montreal']">Signup</button> </Link>
        </div> </div>
    </div>
    
  )
}

export default JoinUs