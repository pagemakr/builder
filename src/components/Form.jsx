import React from 'react'

const Form = () => {
  return (  
    <div className='h-screen my-12 flex flex-col justify-center items-center'>
        <h1 className='text-3xl md:text-5xl text-gray-300 font-bold'>Information</h1>
        <section class="max-w-4xl p-6 my-10 mx-auto rounded-lg border border-gray-300 shadow-md bg-gray-800">
        <h2 class="text-lg font-semibold  capitalize text-gray-300">Add your info</h2>
        <form>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label class="text-gray-200" for="username">Username</label>
                    <input id="username" type="text" class="block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600  focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring"></input>
                </div>

                <div>
                    <label class="text-gray-200" for="emailAddress">Email Address</label>
                    <input id="emailAddress" type="email" class="block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600  focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring"></input>
                </div>

                <div>
                    <label class="text-gray-200" for="password">Password</label>
                    <input id="password" type="password" class="block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600  focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring"></input>
                </div>

                <div>
                    <label class="text-gray-200" for="passwordConfirmation">Password Confirmation</label>
                    <input id="passwordConfirmation" type="password" class="block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600  focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring"></input>
                </div>
            </div>

            <div class="flex justify-end mt-6">
                <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Create</button>
            </div>
        </form>
    </section>
   </div>
  )
}

export default Form
