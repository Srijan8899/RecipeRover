import React from 'react'
import { Link } from 'react-router-dom'

function JoinUs() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.03" className="w-full h-screen overflow-hidden bg-cover brightness-90" style={{ backgroundImage: `url(https://res.cloudinary.com/recipe-rover/image/upload/v1718800654/assets/table_rmqyku.jpg)` }}>
        <div className="top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] relative h-[80vh] w-[90vw] md:w-[70vw] lg:w-[60vw] bg-transparent rounded-2xl backdrop-brightness-75 backdrop-blur-sm shadow-2xl"> 
            <div className="inset-0 relative flex flex-col items-center p-4 md:p-8 lg:p-12">
                <h1 className="uppercase text-[8vw] md:text-[10vh] lg:text-[14vh] flex items-end justify-center mt-16 md:mt-28 z-3 font-['Founders_Grotesk_X_Condensed'] font-light text-[#F8FAE5] leading-none -mb-[.6vw] text-center">
                    So, What are you waiting for?
                </h1>
                <div className="flex flex-col justify-center items-center gap-3 font-['Neue_Montreal'] text-center">
                    <p className="text-lg md:text-2xl mt-5 md:mt-7 text-[#F8FAE5]">
                        Join the culinary revolution today! Unlock a world of endless recipe inspiration, community connection, and culinary creativity. Don't miss out on the ultimate cooking experience with Recipe Rover.
                    </p>
                    <p className="text-lg md:text-2xl mt-5 md:mt-7 text-[#F8FAE5]">
                        For any problem faced or assistance, you can drop a message on our contact page.
                    </p>
                </div>
                <Link to="/contact" className="flex mt-8 md:mt-10 justify-center">
                    <button className="border rounded-2xl px-4 py-3 md:px-5 md:py-5 text-lg md:text-2xl leading-tight bg-[#43766C] text-[#F8FAE5] uppercase tracking-tight font-['Neue_Montreal']">
                        Contact us
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default JoinUs