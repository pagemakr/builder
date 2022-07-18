import React, { useState } from 'react'
import axios from 'axios'


const Form = (props) => {
    const [data,setData] = useState({
        hero:{landing_image : "img", catch_phrase : "cp", desc : "dc",},
        about:{intro : "i", desc : "dc", image1 : "i1", image2 : "i2",},
        grid:{titles:['a','b','c','d','e','f'], descriptions : ['a','b','c','d','e','f'],},
        contact : {name: "n", email: "e", number: "n", address : "ad",},
      });

  const sendData = () => {
     const url = "/api";
     axios.post(url,{
        hero:{
            landing_image : data.hero.landing_image,
            catch_phrase  : data.hero.catch_phrase,
            hero_desc     : data.hero.desc,
        },
        about:{
            intro  : data.about.intro,
            desc   : data.about.desc,
            image1 : data.about.image1,
            image2 : data.about.image2,
        },
        grid:{
            titles       : data.grid.titles,
            descriptions : data.grid.descriptions,
        },
        contact : {
            name    : data.contact.name,
            email   : data.contact.email,
            number  : data.contact.number,
            address : data.contact.address,
        },
     }) .then (res => {
        console.log(res.data);
     }) .catch (err => {
        console.log(err);
     });
  }

  const Hide = (hide) => {return  hide ? " hidden" : " visible"} 
  return (  
    <div id="form" className='overflow-y-auto my-12 flex flex-col justify-center items-center'>
        <h1 className='text-3xl md:text-5xl text-gray-300 font-bold'>Information</h1>
        <section className="max-w-4xl p-6 my-10 mx-auto rounded-lg border border-gray-500 shadow-md bg-gray-800">
        <h2 className="text-lg font-light capitalize text-yellow-300">Section - Hero</h2>
        <form>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div className={Hide(props.hero2)}>
                    <label className="text-gray-200" for="url">Landing Image url</label>
                    <input id="url" type="text" value={data.hero.landing_image} className="block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600  focus:ring-indigo-500 focus:ring-opacity-40 focus:border-indigo-500 focus:outline-none focus:ring"></input>
                </div>
                <div className={Hide(props.hero1)}>
                    <label className="text-gray-200" for="catchphrase">Catch Phrase</label>
                    <input id="catchphrase" value={data.hero.catch_phrase} type="text" className="block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600  focus:ring-indigo-500 focus:ring-opacity-40 focus:border-indigo-500 focus:outline-none focus:ring"></input>
                </div>
                <div className={Hide(props.hero1)}>
                    <label className="text-gray-200" for="desc">One line description</label>
                    <input id="desc-1" type="text" value={data.hero.desc}className="block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600  focus:ring-indigo-500 focus:ring-opacity-40 focus:border-indigo-500 focus:outline-none focus:ring"></input>
                </div>
            </div>
        </form>
       </section>

        <section className="max-w-4xl p-6 my-10 mx-auto rounded-lg border border-gray-500 shadow-md bg-gray-800">
        <h2 className="text-lg font-light  capitalize text-yellow-300">Section - About Us</h2>
        <form>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label className="text-gray-200" for="name">Company name</label>
                    <input id="name" type="text" value={data.contact.name} className="block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600  focus:ring-indigo-500 focus:ring-opacity-40 focus:border-indigo-500 focus:outline-none focus:ring"></input>
                </div>

                <div>
                    <label className="text-gray-200" for="emailAddress">Email Address</label>
                    <input id="emailAddress" value={data.contact.email} type="email" className="block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600  focus:ring-indigo-500 focus:ring-opacity-40 focus:border-indigo-500 focus:outline-none focus:ring"></input>
                </div>

                <div>
                    <label className="text-gray-200" for="phoneNumber">Phone Number</label>
                    <input id="phoneNumber" value={data.contact.number} type="string" className="block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600  focus:ring-indigo-500 focus:ring-opacity-40 focus:border-indigo-500 focus:outline-none focus:ring"></input>
                </div>

                <div>
                    <label className="text-gray-200" for="adress">Address</label>
                    <input id="address" type="string" value={data.contact.address} className="block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600  focus:ring-indigo-500 focus:ring-opacity-40 focus:border-indigo-500 focus:outline-none focus:ring"></input>
                </div>
                <div>
                    <label className="text-gray-200" for="aboutUs">About Us (approx. 15 words)</label>
                    <input id="aboutUs" type="string" value={data.about.intro} className="block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600  focus:ring-indigo-500 focus:ring-opacity-40 focus:border-indigo-500 focus:outline-none focus:ring"></input>
                </div>
                <div>
                    <label className="text-gray-200" for="desc">What we Do (approx. 45 words)</label>
                    <input id="desc" type="string" value={data.about.desc} className="block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600  focus:ring-indigo-500 focus:ring-opacity-40 focus:border-indigo-500 focus:outline-none focus:ring"></input>
                </div>
                <div className={Hide(props.about2)}>
                    <label className="text-gray-200" for="img">First image url</label>
                    <input id="img1" type="string" value={data.about.image1} className="block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600  focus:ring-indigo-500 focus:ring-opacity-40 focus:border-indigo-500 focus:outline-none focus:ring"></input>
                </div>
                <div className={Hide(props.about2)}>
                    <label className="text-gray-200" for="img">Second image url</label>
                    <input id="img2" type="string" value={data.about.image2} className="block w-[full] px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600  focus:ring-indigo-500 focus:ring-opacity-40 focus:border-indigo-500 focus:outline-none focus:ring"></input>
                </div>
            </div>
        </form>
    </section>

    <section className="max-w-4xl p-6 my-10 mx-auto rounded-lg border border-gray-500 shadow-md bg-gray-800">
        <h2 className="text-lg font-light capitalize text-yellow-300">Section - Grid</h2>
        <form>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label className="text-gray-200" for="card">Card 1 Title</label>
                    <input id="card1" type="text" value={data.grid.titles[0]} className="block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600  focus:ring-indigo-500 focus:ring-opacity-40 focus:border-indigo-500 focus:outline-none focus:ring"></input>
                </div>

                <div className={Hide(props.grid2)}>
                    <label className="text-gray-200" for="card">Card 1 Description</label>
                    <input id="card1desc" type="text" value={data.grid.descriptions[0]} className="block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600  focus:ring-indigo-500 focus:ring-opacity-40 focus:border-indigo-500 focus:outline-none focus:ring"></input>
                </div>

                <div>
                    <label className="text-gray-200" for="card">Card 2 Title</label>
                    <input id="card2" type="text" value={data.grid.titles[1]} className="block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600  focus:ring-indigo-500 focus:ring-opacity-40 focus:border-indigo-500 focus:outline-none focus:ring"></input>
                </div>

                <div className={Hide(props.grid2)}>
                    <label className="text-gray-200" for="card">Card 2 Description</label>
                    <input id="card2desc" type="text" value={data.grid.descriptions[1]} className="block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600  focus:ring-indigo-500 focus:ring-opacity-40 focus:border-indigo-500 focus:outline-none focus:ring"></input>
                </div>

                <div>
                    <label className="text-gray-200" for="card">Card 3 Title</label>
                    <input id="card3" type="text" value={data.grid.titles[2]} className="block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600  focus:ring-indigo-500 focus:ring-opacity-40 focus:border-indigo-500 focus:outline-none focus:ring"></input>
                </div>

                <div className={Hide(props.grid2)}>
                    <label className="text-gray-200" for="card">Card 3 Description</label>
                    <input id="card3desc" type="text" value={data.grid.descriptions[2]} className="block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600  focus:ring-indigo-500 focus:ring-opacity-40 focus:border-indigo-500 focus:outline-none focus:ring"></input>
                </div>

                <div>
                    <label className="text-gray-200" for="card">Card 4 Title</label>
                    <input id="card4" type="text" value={data.grid.titles[3]} className="block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600  focus:ring-indigo-500 focus:ring-opacity-40 focus:border-indigo-500 focus:outline-none focus:ring"></input>
                </div>

                <div className={Hide(props.grid2)}>
                    <label className="text-gray-200" for="card">Card 4 Description</label>
                    <input id="card4desc" type="text" value={data.grid.descriptions[3]} className="block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600  focus:ring-indigo-500 focus:ring-opacity-40 focus:border-indigo-500 focus:outline-none focus:ring"></input>
                </div>

                <div>
                    <label className="text-gray-200" for="card">Card 5 Title</label>
                    <input id="card5" type="string" value={data.grid.titles[4]} className="block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600  focus:ring-indigo-500 focus:ring-opacity-40 focus:border-indigo-500 focus:outline-none focus:ring"></input>
                </div>

                <div className={Hide(props.grid2)}>
                    <label className="text-gray-200" for="card">Card 5 Description</label>
                    <input id="card5desc" type="text" value={data.grid.descriptions[4]} className="block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600  focus:ring-indigo-500 focus:ring-opacity-40 focus:border-indigo-500 focus:outline-none focus:ring"></input>
                </div>

                <div>
                    <label className="text-gray-200" for="card">Card 6 Title</label>
                    <input id="card6" type="text" value={data.grid.titles[5]} className="block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600  focus:ring-indigo-500 focus:ring-opacity-40 focus:border-indigo-500 focus:outline-none focus:ring"></input>
                </div>

                <div className={Hide(props.grid2)}>
                    <label className="text-gray-200" for="card">Card 6 Description</label>
                    <input id="card6desc" type="text" value={data.grid.descriptions[5]} className="block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600  focus:ring-indigo-500 focus:ring-opacity-40 focus:border-indigo-500 focus:outline-none focus:ring"></input>
                </div>

            </div>
        </form>
    </section>
    <div className="flex justify-end mt-6">
                <button className="px-12 py-4 leading-5 text-white font-semibold transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-gray-600" onClick={sendData}>Create</button>
    </div>
   </div>
  )
}

export default Form
