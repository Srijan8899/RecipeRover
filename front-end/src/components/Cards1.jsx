import React from 'react'
function Cards1({image, name, index}) {
  return (
    <div key={index} className="max-w-[10rem] border mb-10 rounded-lg shadow bg-gray-800 border-gray-700" >
        <a href="#">
            <div className="h-28 rounded-lg object-cover overflow-hidden"> 
            <img className="rounded-t-lg object-cover h-full w-full" src={image} alt={name} />
            </div>
            </a>
        <div className="">
            <a href="#">
                <h5 className="my-4 text-lg font-bold tracking-tight text-center text-white">{name}</h5>
            </a>
        </div>
    </div>
  )
}

export default Cards1