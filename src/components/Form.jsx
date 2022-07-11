import React from 'react'

const Form = () => {
  return (  
    <div id="form" className='overflow-y-auto my-12 flex flex-col justify-center items-center'>
        <h1 className='text-3xl md:text-5xl text-gray-300 font-bold'>Information</h1>
        <section class="max-w-4xl p-6 my-10 mx-auto rounded-lg border border-indigo-500 shadow-md bg-gray-800">
        <h2 class="text-lg font-bold  capitalize text-gray-300">Section - Hero</h2>
        <form>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label class="text-gray-200" for="url">Landing Image url</label>
                    <input id="url" type="text" class="block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600  focus:ring-indigo-500 focus:ring-opacity-40 focus:border-indigo-500 focus:outline-none focus:ring"></input>
                </div>
            </div>
        </form>
       </section>

        <section class="max-w-4xl p-6 my-10 mx-auto rounded-lg border border-indigo-500 shadow-md bg-gray-800">
        <h2 class="text-lg font-bold  capitalize text-gray-300">Section - About Us</h2>
        <form>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label class="text-gray-200" for="name">Company name</label>
                    <input id="name" type="text" class="block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600  focus:ring-indigo-500 focus:ring-opacity-40 focus:border-indigo-500 focus:outline-none focus:ring"></input>
                </div>

                <div>
                    <label class="text-gray-200" for="emailAddress">Email Address</label>
                    <input id="emailAddress" type="email" class="block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600  focus:ring-indigo-500 focus:ring-opacity-40 focus:border-indigo-500 focus:outline-none focus:ring"></input>
                </div>

                <div>
                    <label class="text-gray-200" for="phoneNumber">Phone Number</label>
                    <input id="phoneNumber" type="string" class="block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600  focus:ring-indigo-500 focus:ring-opacity-40 focus:border-indigo-500 focus:outline-none focus:ring"></input>
                </div>

                <div>
                    <label class="text-gray-200" for="adress">Address</label>
                    <input id="adress" type="string" class="block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600  focus:ring-indigo-500 focus:ring-opacity-40 focus:border-indigo-500 focus:outline-none focus:ring"></input>
                </div>
                <div>
                    <label class="text-gray-200" for="aboutUs">About Us (approx. 15 words)</label>
                    <input id="aboutUs" type="string" class="block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600  focus:ring-indigo-500 focus:ring-opacity-40 focus:border-indigo-500 focus:outline-none focus:ring"></input>
                </div>
                <div>
                    <label class="text-gray-200" for="desc">What we Do (approx. 45 words)</label>
                    <input id="desc" type="string" class="block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600  focus:ring-indigo-500 focus:ring-opacity-40 focus:border-indigo-500 focus:outline-none focus:ring"></input>
                </div>
            </div>
        </form>
    </section>

    <section class="max-w-4xl p-6 my-10 mx-auto rounded-lg border border-indigo-500 shadow-md bg-gray-800">
        <h2 class="text-lg font-bold  capitalize text-gray-300">Section - Grid</h2>
        <form>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label class="text-gray-200" for="name">Company name</label>
                    <input id="name" type="text" class="block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600  focus:ring-indigo-500 focus:ring-opacity-40 focus:border-indigo-500 focus:outline-none focus:ring"></input>
                </div>

                <div>
                    <label class="text-gray-200" for="emailAddress">Email Address</label>
                    <input id="emailAddress" type="email" class="block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600  focus:ring-indigo-500 focus:ring-opacity-40 focus:border-indigo-500 focus:outline-none focus:ring"></input>
                </div>

                <div>
                    <label class="text-gray-200" for="phoneNumber">Phone Number</label>
                    <input id="phoneNumber" type="string" class="block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600  focus:ring-indigo-500 focus:ring-opacity-40 focus:border-indigo-500 focus:outline-none focus:ring"></input>
                </div>

                <div>
                    <label class="text-gray-200" for="adress">Address</label>
                    <input id="adress" type="string" class="block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600  focus:ring-indigo-500 focus:ring-opacity-40 focus:border-indigo-500 focus:outline-none focus:ring"></input>
                </div>
                <div>
                    <label class="text-gray-200" for="aboutUs">About Us (approx. 15 words)</label>
                    <input id="aboutUs" type="string" class="block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600  focus:ring-indigo-500 focus:ring-opacity-40 focus:border-indigo-500 focus:outline-none focus:ring"></input>
                </div>
                <div>
                    <label class="text-gray-200" for="desc">What we Do (approx. 45 words)</label>
                    <input id="desc" type="string" class="block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600  focus:ring-indigo-500 focus:ring-opacity-40 focus:border-indigo-500 focus:outline-none focus:ring"></input>
                </div>
            </div>
        </form>
    </section>
    <div class="flex justify-end mt-6">
                <button class="px-12 py-4 leading-5 text-white transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-gray-600">Create</button>
    </div>
   </div>
  )
}

export default Form
