import React from 'react'
import axios from 'axios'
import {useEffect, useState} from 'react'
import { BsSearch } from "react-icons/bs";
import Cards from './Cards'

function MainContent() {
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const Search_URL = 'https://api.deezer.com/search?q='
    const URL = 'https://api.deezer.com/chart'

    const [search, setSearch] = useState("");
    const [query,setQuery] = useState(null);
    const [MusicData, setMusicData] = useState([])
    
    const updateSearch = e => {
        setSearch(e.target.value);
    }
    
    const getSearch = e =>{
        e.preventDefault();
        setQuery(search);
        setSearch("");
    }

    const getSearchedMusic = async () =>{
        try {
            const responseOfSearch = await axios.get(Search_URL + query)
            setMusicData(responseOfSearch.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getMusic = async () =>{
        try {
            const response = await axios.get(URL)
            setMusicData(response.data.tracks.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(query==null){
            getMusic()
        }
        getSearchedMusic() 
    }, [query])


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
                <div className="hidden lg:w-3/12 xl:w-2/12 lg:flex"></div>

                {/*music section*/}
                <div className="w-full lg:w-6/12 xl:w-7/12 2xl:w-6/12 overflow-y-auto h-440 sm:h-410 pr-2 sm:mt-4">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-4 grid-flow-row">
                        {MusicData? MusicData.map((each)=>(<Cards data={each} key={each.id}/>)):<p>Loading..</p>}
                    </div>
                </div>

                {/*Right section*/}
                <div className="lg:w-3/12 xl:w-2/12 text-white"></div>
            </div>
        </div>
    )
}

export default MainContent
