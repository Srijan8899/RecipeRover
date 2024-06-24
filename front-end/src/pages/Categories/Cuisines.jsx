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
            link : "/categories/cuisine/indian"
        },
        {
            image: Chinese,
            title: 'Chinese',
            link : "/categories/cuisine/chinese"
        },
        {
            image: Italian,
            title: 'Italian',
            link : "/categories/cuisine/italian"
        },
        {
            image: American,
            title: 'American',
            link : "/categories/cuisine/american"
        },
        {
            image: British,
            title: 'British',
            link : "/categories/cuisine/british"
        },
        {
            image: French,
            title: 'French',
            link : "/categories/cuisine/french"
        },
        {
            image: Spanish,
            title: 'Spanish',
            link : "/categories/cuisine/spanish"
        },
        {
            image: Mexican,
            title: 'Mexican',
            link : "/categories/cuisine/mexican"
        },
    ]

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <img src={Background} alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-95 brightness-75"/>

      <div className="relative flex flex-col items-center justify-center min-h-screen py-10">
        
        
        <div className="w-full max-w-[80vw] md:max-w-[60vw] px-5 py-5 mt-20 mx-auto bg-transparent rounded-2xl backdrop-brightness-75 backdrop-blur-sm shadow-2xl">
        <h1 className="uppercase text-[9vh] md:text-[15vh] font-['Founders_Grotesk_X_Condensed'] font-light text-[#F8FAE5] leading-none mb-10 flex justify-center">
          Cuisines
        </h1>
          <div className="w-full px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-auto">
            {Categories.map(({ image, title, link }, index) => (
              <Cards key={index} image={image} name={title} link={link} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cuisines