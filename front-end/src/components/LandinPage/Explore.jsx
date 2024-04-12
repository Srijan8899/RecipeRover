import React from 'react'
import Search from '../Search'
import Cards from '../Cards1'

import Salad from "../../assets/card/Salad.jpg"
import Vegeterian from "../../assets/card/Vegeterian.jpg"
import NonVeg from "../../assets/card/NonVeg.jpg"
import Books from "../../assets/card/Books.jpg"
import Cuisines from "../../assets/card/Cuisines.jpg"
import Favorites from "../../assets/card/Favorites.jpg"
import Upload from "../../assets/card/Uploads.jpeg"
import User from "../../assets/card/User.jpg"

function Explore() {
  const Categories = [
    { 
        image: Vegeterian,
        name:"Vegeterian",
    },
    { 
        image:NonVeg,
        name:"Non-Vegeterian",
    },
    { 
        image:Salad,
        name:"Salads",
    },
    { 
        image:Cuisines,
        name:"Cuisines",
    },
    { 
        image:Books,
        name:"Recipe Books",
    },
    { 
        image:User,
        name:"Community",
    },
    { 
        image:Upload,
        name:"Upload Your's",
    },
    { 
        image:Favorites,
        name:"Your Favorites",
    },
]
  return (
    <div className="w-full flex text-white bg-zinc-900">
        <div className="w-[60vw]">
        <h1 className="text-4xl flex text-center items-center justify-center pt-20 font-bold">
            Your everyday question of what to cook today will be answered here.
        </h1>
        <Search />
        <h2 className="pt-20 text-3xl flex items-center justify-center font-bold uppercase"> Browse from categories..</h2>
        <div className="p-9 grid my-5 grid-cols-3 gap-4 lg:grid-cols-4 ">
        {Categories.map(({image, name},index) => (
        <Cards key={index} image={image} name={name}/> 
        ))}
        </div>
        </div>
        <div className="relative image w-[40vw] flex flex-col overflow-hidden">
            <img src="./src/assets/fridge.jpg" alt="food" className="absolute w-full h-full z-1 opacity-60 brightness-90"/>
            <div className="flex items-center justify-center w-full h-full">
            <div className="uppercase absolute top-40 ml-6 text-[15vw] leading-none font-light font-['Founders_Grotesk_X_Condensed'] text-[#F8FAE5] "> What's in your fridge ? </div>
             </div></div>
    </div>
  )
}

export default Explore