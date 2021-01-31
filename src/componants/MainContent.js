import React from 'react'
import { BsSearch } from "react-icons/bs";
import NewsCards from "./NewsCards"
import axios from 'axios'

function MainContent() {
    return (
        <div className="w-12/12 p-4">
            {/*Search*/}
            <div className="w-full flex justify-center my-4">
                <div className="w-full sm:max-w-sm bg-sp bg-opacity-25 flex flex-row rounded-md ring-1 ring-blue-600">
                    <div className="flex justify-center items-center">
                        <span className="text-gray-500 mx-2"><BsSearch/></span>
                    </div>
                    <div className="flex-grow">
                        <input className="w-full outline-none bg-blue-600 bg-opacity-0 text-white py-1 rounded-md" type="text" placeholder="Search for news"/>
                    </div>
                </div>
            </div>
            {/*Main content*/}
            <div className="w-full flex justify-center my-4">
                <div className="w-full mx-0 md:w-9/12 lg:w-7/12">
                <NewsCards/>
                </div>
            </div>  
        </div>
    )
}

export default MainContent
