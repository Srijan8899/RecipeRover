import React from 'react'
import Cards from '../../components/Cards1'

import Background from '../../assets/cupspoon.jpg'
import Indian from '../../assets/cuisines/indian.jpg'
import Chinese from '../../assets/cuisines/chinese.jpg'
import Italian from '../../assets/cuisines/italian.jpg'
import American from '../../assets/cuisines/american.jpg'
import British from '../../assets/cuisines/british.jpg'
import French from '../../assets/cuisines/french.jpg'
import Spanish from '../../assets/cuisines/spanish.jpeg'
import Mexican from '../../assets/cuisines/mexican.jpg'


function Cuisines() {

    const Categories = [
        {
            image: Indian,
            title: 'Indian',
        },
        {
            image: Chinese,
            title: 'Chinese',
        },
        {
            image: Italian,
            title: 'Italian',
        },
        {
            image: American,
            title: 'American',
        },
        {
            image: British,
            title: 'British',
        },
        {
            image: French,
            title: 'French',
        },
        {
            image: Spanish,
            title: 'Spanish',
        },
        {
            image: Mexican,
            title: 'Mexican',
        },
    ]

  return (
    <div className="w-full h-screen overflow-hidden">
        <img src={Background} alt="" className="absolute opacity-95 brightness-75 object-cover w-full h-full"/>
        <div className="top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] relative h-[80vh] w-[60vw] bg-transparent rounded-2xl backdrop-brightness-75 backdrop-blur-sm shadow-2xl"> 
        <div className="inset-0 relative flex flex-col ">
        <h1 className=" uppercase text-[15vh] flex items-end justify-center mt-10 z-3 font-['Founders_Grotesk_X_Condensed'] font-light text-[#F8FAE5] leading-none -mb-[.6vw]"> Cuisines </h1>
        <div className="mx-12 grid my-2 grid-cols-3 gap-1 lg:grid-cols-4 ">
        {Categories.map(({image, title},index) => (
            <Cards key={index} image={image} name={title}/>
        ))
        
        }   
        </div>
        </div> </div>
    </div>
  )
}

export default Cuisines