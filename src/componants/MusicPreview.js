import React from 'react'
import {BsChevronDoubleRight} from 'react-icons/bs'
import imageShowMore from '../Assests/tyler-nix.jpg'

function MusicPreview({MusicData}) {
    return (
        <div className="w-full lg:w-6/12 xl:w-7/12 2xl:w-6/12 flex-shrink-0 overflow-y-auto max-h-460 sm:max-h-440 sm:mt-4 sm:border border-gray-800 sm:p-4 rounded" >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-4 grid-flow-row">
                {MusicData? MusicData.data.map((each)=>(<Cards data={each} key={each.id}/>)):<p>Loading..</p>}

                {MusicData.next? <ShowMoreCards/>:null}
            </div>
        </div>
    )
}

function Cards({data}) {
    return (
        <div className="border border-gray-800 rounded p-2"
        style={{background: 'rgb(13,17,23)', background: 'linear-gradient(100deg, rgba(13,17,23,1) 0%, rgba(56,139,253,0.1) 49%, rgba(46,160,67,0.1) 100%)'}}>
            <div className="flex flex-col sm:flex-row">
                <div className="flex-shrink-0">
                    <img className="h-24 w-24 sm:h-20 sm:w-20 object-cover mx-auto" src={data.album.cover_medium}/>
                </div>
                <div className="text-white sm:pl-2 h-16 sm:h-20 mt-2 sm:mt-0">
                    <h1 className="text-xs sm:text-sm overflow-ellipsis overflow-hidden max-h-8 sm:max-h-10">{data.title}</h1>
                    <h2 className="text-xs mt-1 text-blue-500">{data.artist.name}</h2>
                    <h2 className="text-xs h-5 overflow-ellipsis overflow-hidden text-blue-500">{data.album.title}</h2>
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

function ShowMoreCards(){
    return(
        <div className="border border-gray-800 rounded p-2 col-span-1 sm:col-span-2 lg:col-span-1 xl:col-span-2 flex bg-green-500 hover:bg-blue-500 hover:bg-opacity-10 bg-opacity-5 cursor-pointer">
            <img className="h-26 w-7/12 object-cover" src={imageShowMore}/>
            <div className="flex text-blue-600 text-xl text-center items-center mx-auto">
                <div className="flex flex-col my-auto font-semibold mx-2">
                    <span>Show</span>
                    <span>More</span>
                </div>
                <div className="text-4xl"><BsChevronDoubleRight/></div>
            </div>
        </div>
    )
}

export default React.memo(MusicPreview)
