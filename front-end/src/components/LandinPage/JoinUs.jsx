import React from 'react'
import { Link } from 'react-router-dom'

function JoinUs() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.03" className="w-full h-screen overflow-hidden bg-[url('./src/assets/table.jpg')] brightness-90 bg-cover">
        <div className="top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] relative h-[80vh] w-[60vw] bg-transparent rounded-2xl backdrop-brightness-75 backdrop-blur-sm shadow-2xl"> 
        <div className="inset-0 relative flex flex-col ">
        <h1 className=" uppercase text-[14vh] flex items-end justify-center mt-28 z-3 font-['Founders_Grotesk_X_Condensed'] font-light text-[#F8FAE5] leading-none -mb-[.6vw]"> So, What are you waiting for? </h1>
        <div className="flex justify-end items-center px-40 gap-3 font-['Neue_Montreal']">
        <p className="text-2xl mt-7 text-[#F8FAE5] text-center">Join the culinary revolution today!<br/>Unlock a world of endless recipe inspiration, community connection, and culinary creativity. Don't miss out on the ultimate cooking experience with Recipe Rover. <br/> For any problem faced or assistance, you can drop a message on our contact page. </p>
        </div>
        <Link to="/contact" className="flex mt-10 justify-center">
            <button className="border rounded-2xl px-5 py-5 text-2xl leading-[.6] bg-[#43766C] text-[#F8FAE5] uppercase tracking-tight font-['Neue_Montreal']">Contact us</button> </Link>
        </div> </div>
    </div>
    
  )
}

export default JoinUs