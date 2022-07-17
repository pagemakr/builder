import React from 'react'

const DisplayCard = (props) => {
  const addBorder = (selected) => {
    return selected ? "border-indigo-600" : "border-gray-900";
  }
  return (
    <div>      
    <div className={"max-w-xs mx-auto my-8 overflow-hidden rounded-lg shadow-lg  bg-gray-800 border-2 hover:opacity-50 "
     + addBorder(props.isSelected)}>
        <div className="px-4 py-2">
            <h1 className="text-3xl font-bold text-gray-300 uppercasetext-white">{props.name}</h1>
            <p className="mt-1 text-sm text-gray-400">{props.description}</p>
        </div>
        <img className="object-cover w-full h-48 mt-2" src={props.image} alt="section"></img>
    </div>
    </div>
  )
}

export default DisplayCard;
