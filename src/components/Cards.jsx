import React from 'react'
import Card from './displayCard'
import dummy from '../assets/about.png';

const Cards = (props) => {
  return (
    <div id="cards" className="flex flex-col justify-center items-center mb-32">
       <h1 className='font-bold text-3xl md:text-5xl pt-10 mb-6 text-gray-300'>Our Components</h1>
       <span className="w-64 h-[1px] bg-gray-300 mb-6"></span>
        <div className='flex flex-col md:flex-row md:gap-x-32'>
          <div 
           onClick={() => {
              props.setHero1(true);
              props.setHero2(false);
           }}
          >
          <Card isSelected={props.hero1} name="Hero - Option 1" description="Landing page with image" image={dummy}/>
          </div>
          <div
           onClick={ () => {
             props.setHero2(true);
             props.setHero1(false);
          }}
          >
          <Card isSelected={props.hero2} name="Hero - Option 2" description="Imagless landing page" image={dummy}/>
          </div>
        </div>
        <div className='flex flex-col md:flex-row  md:gap-x-32'>
          <div
            onClick={ () => {
              props.setAbout1(true);
              props.setAbout2(false);
           }}
          >
          <Card isSelected={props.about1} name="About - Option 1" description="Introducing your organization w/img" image={dummy}/>
          </div>
          <div
           onClick={ () => {
            props.setAbout2(true);
            props.setAbout1(false);
           }}
          >
          <Card isSelected={props.about2} name="About - Option 2" description="About page. No images needed" image={dummy}/>
          </div>
        </div>
        <div className='flex flex-col md:flex-row md:gap-x-32'>
          <div
          onClick={ () => {
            props.setGrid1(true);
            props.setGrid2(false);
           }}
          >
          <Card isSelected={props.grid1} name="Grid - Option 1" description="In depth description of your company" image={dummy}/>
          </div>
          <div
           onClick={ () => {
            props.setGrid2(true);
            props.setGrid1(false);
           }}
          >
          <Card isSelected={props.grid2} name="Grid - Option 2" description="Highlights of your company" image={dummy}/>
          </div>
        </div>
    </div>
  )
}

export default Cards