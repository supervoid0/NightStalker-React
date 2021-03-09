import React from 'react'
import banner from '../Assests/music-header.jpg'

function Midbanner() {
    return (
        <div className="w-full flex justify-center my-4">
            <div className=" relative w-full lg:w-6/12 xl:w-7/12 2xl:w-6/12 sm:p-4 box-content sm:border border-gray-800 rounded">
                <img className="object-cover" src={banner}/>
                <div className="absolute w-full h-full bg-black bg-opacity-10 top-0 z-2">

                </div>
            </div>

        </div>
    )
}

export default Midbanner
