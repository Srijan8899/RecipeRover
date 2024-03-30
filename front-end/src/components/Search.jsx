import React from 'react'
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div className=" text-black font-['Neue_Montreal']">
        <div className=" grid gap-8 items-start justify-center">
        <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
    <div className="relative inset-0 flex items-center justify-between px-4 py-2 leading-none bg-[#F8FAE5] rounded-xl overflow-hidden">
        <input id="email" className=" bg-[#F8FAE5] text-xl w-[40vw] pl-2 outline-none border-none" type="email" name="email" placeholder="Search from ingredients" />
            <button type="submit" className=" input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700"><FaSearch size={40}/></button>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Search