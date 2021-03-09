import React from 'react'
import {useEffect, useState, useCallback} from 'react'
import axios from 'axios'
import { BsSearch } from "react-icons/bs";
import MusicPreview from './MusicPreview'
import Midbanner from './Midbanner'

function MainContent() {
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const Search_URL = 'https://api.deezer.com/search?q='
    const URL = 'https://api.deezer.com/chart'

    const [search, setSearch] = useState("");
    const [query,setQuery] = useState(null);
    const [MusicData, setMusicData] = useState(null)
    
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
            setMusicData(responseOfSearch.data)
        } catch (error) {
            console.log("error fetching data")
        }
    }

    const getMoreMusic = useCallback(async () => {
        try {
            const responseOfMore = await axios.get(MusicData.next)
            setMusicData(responseOfMore.data)
        } catch (error) {
            console.log(error, 'error fetching new preview data')
        }
    },[MusicData]) 

    const getMusic = async () =>{
        try {
            const response = await axios.get(URL)
            setMusicData(response.data.tracks)
        } catch (error) {
            console.log("error fetching data")
        }
    }

    useEffect(() => {
        if(query==null){
            getMusic()
        }else{
            getSearchedMusic()
        }
    }, [query])


    return (
        <div className="w-12/12 p-4 bg-secondary">
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
                {MusicData !== null? <MusicPreview MusicData={MusicData} getMoreMusic={getMoreMusic}/>:null}

                {/*Right section*/}
                <div className="lg:w-3/12 xl:w-2/12 text-white"></div>
            </div>
            <Midbanner/>
        </div>
    )
}

export default MainContent
