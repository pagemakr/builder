import React from 'react'
import { useState } from 'react';

const DisplayCard = (props) => {
  const [selected,setSelected] = useState(false);
  return (
    <div>      
    <div className="max-w-xs mx-auto my-8 overflow-hidden rounded-lg shadow-lg bg-gray-800  hover:border-indigo-600 hover:border-2" onClick={() => {
      setSelected(!selected)
      console.log(selected);
      }}>
        <div class="px-4 py-2">
            <h1 class="text-3xl font-bold text-gray-300 uppercasetext-white">{props.name}</h1>
            <p class="mt-1 text-sm text-gray-400">{props.description}</p>
        </div>
        <img class="object-cover w-full h-48 mt-2" src={props.image} alt="section"></img>
    </div>
    </div>
  )
}

export default DisplayCard;
