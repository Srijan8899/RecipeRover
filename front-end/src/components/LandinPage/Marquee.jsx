import React from 'react'
import { motion } from "framer-motion";

function Marquee() {
  
  return (
    <div className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#43766C] text-[#F8FAE5]'>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden font-['Founders_Grotesk_X_Condensed_Bold']">
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease: "linear", duration:30}} className='uppercase text-[25vw] leading-none font-semibold pr-20 pt-8 -mb-[7vw]'>
                Explore. Create. Share. 
            </motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease: "linear", duration:30}} className='uppercase text-[25vw] leading-none font-semibold pr-20 pt-8 -mb-[7vw]'>
                Explore. Create. Share. 
            </motion.h1>
        </div>
    </div>
  )
}

export default Marquee 