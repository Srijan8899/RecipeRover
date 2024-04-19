import React from 'react'

function Card({image,title,onClick, cardKey}) {
  return (
    <div key={cardKey} className="w-full max-w-sm border rounded-lg shadow bg-gray-800 border-gray-700">
            <img className="p-8 rounded-t-lg" src={image} alt={title} />
        <div className="px-5 flex flex-col items-center justify-center">
          <div className="h-16 flex items-center justify-center">
                <h5 className="text-xl text-center font-semibold tracking-tighttext-white">{title}</h5></div>
                <button onClick={onClick} className="my-5 text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm  px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">View Recipe</button>
            </div>
        </div>
  )
}

export default Card