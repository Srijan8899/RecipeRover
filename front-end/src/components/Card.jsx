import React from 'react'

function Card({image,title,onClick, cardKey}) {
  return (
    <div key={cardKey} className="w-full max-w-sm border rounded-lg shadow bg-gray-800 border-gray-700">
            <img className="p-6 rounded-t-lg h-64 w-full object-cover overflow-hidden" src={image} alt={title} loading="lazy" />
        <div className="px-5 flex flex-col items-center justify-center">
          <div className="h-16 flex items-center justify-center">
                <h5 className="text-xl text-center font-semibold tracking-tighttext-white">{title}</h5></div>
                <button onClick={onClick} className="my-5 text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm  px-5 py-2.5 text-center bg-[#4c8479] hover:bg-[#39665d] focus:ring-[#63ad9e]">View Recipe</button>
            </div>
        </div>
  )
}

export default Card