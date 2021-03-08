import React from 'react'

function Cards({data}) {
    console.log(data)
    return (
        <div className="border border-gray-800 rounded p-2"
        style={{background: 'rgb(13,17,23)', background: 'linear-gradient(100deg, rgba(13,17,23,1) 0%, rgba(56,139,253,0.1) 49%, rgba(46,160,67,0.1) 100%)'}}>
            <div className="flex flex-col sm:flex-row">
                <div className="flex-shrink-0">
                    <img className="h-24 w-24 sm:h-20 sm:w-20 object-cover mx-auto" src={data.album.cover_medium}/>
                </div>
                <div className="text-white sm:pl-2 h-16 sm:h-20 mt-2 sm:mt-0">
                    <h1 className="text-xs sm:text-sm overflow-ellipsis overflow-hidden max-h-8 sm:max-h-11">{data.title}</h1>
                    <h2 className="text-xs mt-1 text-blue-500">Artist- {data.artist.name}</h2>
                    <h2 className="text-xs h-5 overflow-ellipsis overflow-hidden text-blue-500">Album- {data.album.title}</h2>
                </div> 
            </div>
            <div className="w-full mt-2">
                <audio controls className="w-full h-5">
                    <source src={data.preview} type="audio/mpeg"/>
                </audio>
            </div>
        </div>
    )
}

export default React.memo(Cards)
