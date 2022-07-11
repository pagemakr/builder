import React from 'react'

const Landing = () =>{
  return (
    <div id="home" className='my-10 h-screen'>
        <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8">
                <div className="text-center space-y-4">
                    <h1 className="text-gray-300 font-bold text-4xl md:text-5xl">
                        Build and Deploy Websites
                         <span className="text-blue-400"> with Ease </span>
                    </h1>
                    <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
                    </p>
                </div>
                <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
                    <a href="#cards" className="px-10 py-3.5 w-full bg-blue-400 text-gray-900 text-center font-bold rounded-md shadow-md block sm:w-auto hover:text-gray-900">
                        Get started
                    </a>
                </div>
            </section>
    </div>
  )
}

export default Landing;
