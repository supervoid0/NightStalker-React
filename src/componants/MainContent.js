import React from 'react'
import {useEffect, useState} from 'react'
import { BsSearch } from "react-icons/bs";

function MainContent() {
    const [search, setSearch]=useState("");
    const [query,setQuery]=useState("");
    
    
    const updateSearch = e => {
        setSearch(e.target.value);
    }
    
    const getSearch= e =>{
    e.preventDefault();
    setQuery();
    setSearch("");
    }

    return (
        <div className="w-12/12 p-4">
            {/*Search*/}
            <div className="w-full flex justify-center my-4">
                <div className="w-full sm:max-w-sm bg-sp bg-opacity-25 flex flex-row rounded-md ring-1 ring-blue-600">
                    <div className="flex justify-center items-center">
                        <span className="text-gray-500 mx-2"><BsSearch/></span>
                    </div>
                    <div className="flex-grow">
                        <form onSubmit={getSearch} className="search-form">
                            <input  value={search} onChange={updateSearch} type="text" placeholder="Search for Music" className="w-full outline-none bg-blue-600 bg-opacity-0 text-white py-1 rounded-md" />
                        </form>     
                    </div>
                </div>
            </div> 
            <div className="w-full flex flex-col lg:flex-row justify-center">
                {/*Left section*/}
                <div className="hidden lg:w-3/12 lg:flex"></div>

                {/*music section*/}
                <div className="w-full lg:w-6/12 overflow-y-auto h-768 bg-blue-400">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2 grid-flow-row">
                        <div className="h-24 bg-black"></div>
                        <div className="h-24 bg-black"></div>
                        <div className="h-24 bg-black"></div>
                        <div className="h-24 bg-black"></div>
                        <div className="h-24 bg-black"></div>
                        <div className="h-24 bg-black"></div>
                        <div className="h-24 bg-black"></div>
                        <div className="h-24 bg-black"></div>
                        <div className="h-24 bg-black"></div>
                    </div>
                </div>

                {/*Right section*/}
                <div className="lg:w-3/12 text-white"></div>
            </div>
        </div>
    )
}

export default MainContent
