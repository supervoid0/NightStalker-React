import React from 'react'
import banner from '../Assests/music-header.jpg'

function Midbanner() {
    return (
        <div className="w-full flex justify-center my-6">
            <div className="w-full lg:w-6/12 xl:w-7/12 2xl:w-6/12 sm:p-4 sm:border border-gray-800 rounded">
                <div className="relative">
                    <img className="object-cover" src={banner}/>
                    <div className="absolute w-full h-full bg-black bg-opacity-10 top-0 z-2"></div>
                </div>
            </div>

        </div>
    )
}

export default React.memo(Midbanner)
