import React from 'react'
import Card from './displayCard'
import { useState } from 'react'

const Cards = () => {
  
  return (
    <div id="cards" className="flex flex-col justify-center items-center">
       <h1 className='font-bold text-3xl md:text-5xl py-10 text-gray-300'>Our Components</h1>
        <div className='flex flex-col md:flex-row gap-32'>
          <Card name="Hero" description="Landing page with image" image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"/>
          <Card name="Hero" description="Imagless landing page" image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"/>
        </div>
        <div className='flex flex-col md:flex-row  gap-32'>
          <Card name="About" description="Introducing your organization w/img" image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"/>
          <Card name="About" description="About page. No images needed" image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"/>
        </div>
        <div className='flex flex-col md:flex-row gap-32'>
          <Card name="Grid" description="In depth description of your company" image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"/>
          <Card name="Grid" description="Highlights of your company" image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"/>
        </div>
    </div>
  )
}

export default Cards