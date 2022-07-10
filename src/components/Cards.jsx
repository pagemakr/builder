import React from 'react'
import Card from './displayCard'


const Cards = () => {
  return (
    <div className="flex flex-col justify-center items-center">
       <h1 className="text-gray-300 text-3xl mb-2 font-bold">Heroes</h1>
        <div className='flex flex-col md:flex-row gap-32'>
          <Card/>
          <Card/>
        </div>
        <h1 className='text-gray-300 text-3xl mb-2 font-bold'>Abouts</h1>
        <div className='flex flex-col md:flex-row  gap-32'>
          <Card/>
          <Card/>
        </div>
        <h1 className='text-gray-300 text-3xl mb-2 font-bold '>Grids</h1>
        <div className='flex flex-col md:flex-row gap-32'>
          <Card/>
          <Card/>
        </div>
    </div>
  )
}

export default Cards