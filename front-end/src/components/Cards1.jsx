import React from 'react'
import { Link } from 'react-router-dom'
function Cards1({image, name, index,link}) {
  return (
    <Link to={link}>
    <div key={index} className="max-w-[10rem] border mx-3 backdrop:shadow-lg mb-10 rounded-lg shadow bg-gray-800 border-gray-700" >
            <div className="h-28 rounded-lg object-cover overflow-hidden"> 
            <img className="rounded-t-lg object-cover h-full w-full" src={image} alt={name} />
            </div>
        <div className="">
                <h5 className="my-4 text-lg font-bold tracking-tight text-center text-white">{name}</h5>
        </div>
    </div>
    </Link>
  )
}

export default Cards1