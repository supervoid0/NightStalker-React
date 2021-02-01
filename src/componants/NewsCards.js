import React from 'react'

function NewsCards({data}) {
    return (
        <div className="w-full max-h-52 md:max-h-64 my-5 flex flex-row p-4 ring-1 ring-gray-800" style={{background:"linear-gradient(180deg, transparent 60%, rgba(13,17,23,1)), linear-gradient(70deg, rgba(56,139,253,0.1) 32%, rgba(46,160,67,0.1))"}}>
            <div className="w-4/12 md:w-3/12">
                <img className="block max-w-full" src={data.urlToImage}/>
            </div>

            <div className="w-8/12 md:9/12 ml-5 text-sm md:text-base overflow-y-hidden">
                <div className="text-white">
                    <h1>{data.title} {<span className="italic"> - {data.publishedAt.split("T")[0]}</span>} {data.author !== null? <span className="italic">, {data.author}</span>:null}</h1>
                </div>
                <div className="pt-3 md:pt-4">
                    <p className=" text-white">{data.content}</p>
                </div>
                <div className="text-right">
                    <a href={data.url} target="_blank"><span className="text-blue-600 text-base"> Read more..</span></a>
                </div>
            </div>
        </div>
    )
}

export default NewsCards
