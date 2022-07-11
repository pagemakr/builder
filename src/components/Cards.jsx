import React from 'react'
import Card from './displayCard'
import { useState } from 'react'

const Cards = () => {
  
  return (
    <div id="cards" className="flex flex-col justify-center items-center">
       <h1 className='font-bold text-3xl md:text-5xl pt-10 mb-6 text-gray-300'>Our Components</h1>
       <span className="w-64 h-1 bg-gray-300 mb-6"></span>
        <div className='flex flex-col md:flex-row md:gap-x-32'>
          <Card name="Hero - Option 1" description="Landing page with image" image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"/>
          <Card name="Hero - Option 2" description="Imagless landing page" image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"/>
        </div>
        <div className='flex flex-col md:flex-row  md:gap-x-32'>
          <Card name="About - Option 1" description="Introducing your organization w/img" image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"/>
          <Card name="About - Option 2" description="About page. No images needed" image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"/>
        </div>
        <div className='flex flex-col md:flex-row md:gap-x-32'>
          <Card name="Grid - Option 1" description="In depth description of your company" image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"/>
          <Card name="Grid - Option 2" description="Highlights of your company" image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"/>
        </div>
    </div>
  )
}

export default Cards