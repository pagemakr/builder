import React from 'react'

const Landing = () =>{
  return (
    <div id="home" className='my-10 overflow-y-auto pb-20'>
        <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8">
                <div className="text-center space-y-4">
                    <h1 className="text-gray-300 font-bold text-4xl md:text-5xl">
                        Build and Deploy Websites
                         <span className="text-indigo-500"> with Ease </span>
                    </h1>
                    <p className="text-gray-300 max-w-xl mx-auto leading-relaxed">
                       Auto build and Deploy tool that creates websites free of cost. Choose your sections, provide us with information, and click create. That's it
                    </p>
                </div>
                <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
                    <a href="#cards" className="px-10 py-3.5 w-full bg-indigo-600 text-gray-200 text-center font-bold rounded-md shadow-md block sm:w-auto hover:text-gray-900">
                        Get started
                    </a>
                </div>
            </section>
    </div>
  )
}

export default Landing;
