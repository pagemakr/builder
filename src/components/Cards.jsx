import React from 'react'
import Card from './displayCard'
import { useState } from 'react'
import about from '../assets/about.png';
import about2 from '../assets/about-alt.png';
import hero from '../assets/hero.png';
import hero2 from '../assets/hero-alt.png';
import grid from '../assets/grid.png';
import grid2 from '../assets/grid-alt.png';
const Cards = () => {
  
  return (
    <div id="cards" className="flex flex-col justify-center items-center">
       <h1 className='font-bold text-3xl md:text-5xl pt-10 mb-6 text-gray-300'>Our Components</h1>
       <span className="w-64 h-[1px] bg-gray-300 mb-6"></span>
        <div className='flex flex-col md:flex-row md:gap-x-32'>
          <Card name="Hero - Option 1" description="Landing page with image" image={hero}/>
          <Card name="Hero - Option 2" description="Imagless landing page" image={hero2}/>
        </div>
        <div className='flex flex-col md:flex-row  md:gap-x-32'>
          <Card name="About - Option 1" description="Introducing your organization w/img" image={about}/>
          <Card name="About - Option 2" description="About page. No images needed" image={about2}/>
        </div>
        <div className='flex flex-col md:flex-row md:gap-x-32'>
          <Card name="Grid - Option 1" description="In depth description of your company" image={grid}/>
          <Card name="Grid - Option 2" description="Highlights of your company" image={grid2}/>
        </div>
    </div>
  )
}

export default Cards