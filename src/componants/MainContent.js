import React from 'react'
import {useEffect, useState} from 'react'
import { BsSearch } from "react-icons/bs";
import NewsCards from "./NewsCards"
const NewsAPI = require('newsapi');

function MainContent() {
    const newsapi = new NewsAPI('185762625a6b479b87bc8a3dc79b4cb0');
    const [News, setNews] = useState([])
    const [search, setSearch]=useState("");
    const [query,setQuery]=useState({
        q: 'bitcoin',
        sources: 'bbc-news,the-verge',
        domains: 'bbc.co.uk, techcrunch.com',
        from: '2021-1-5',
        to: '2021-1-12',
        language: 'en',
        sortBy: 'relevancy',
        page: 2
    });
    
    
    const updateSearch= e => {
        setSearch(e.target.value);
    }
    
    const getSearch= e =>{
    e.preventDefault();
    setQuery(search);
    setSearch("");
    }
    const getNews = (query) => {
        newsapi.v2.everything(query).then(response => {
            console.log(response);
        });
    }

    useEffect(() => {
        getNews(query)
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
                            <input  value={search} onChange={updateSearch} type="text" placeholder="Search for news" className="w-full outline-none bg-blue-600 bg-opacity-0 text-white py-1 rounded-md" />
                        </form>     
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
