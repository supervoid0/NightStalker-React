import React from 'react'

function NewsCards({data}) {
    return (
        <div className="w-full my-4 flex flex-column sm:flex-row p-4 ring-1 ring-gray-800">
            {/*image*/}
            <div>
                <img/>
            </div>

            <div>
                    {/*Title*/}
                <div>
                    <h1>{data.title}</h1>
                </div>
                {/*Content*/}
                <div>
                    <p></p>
                </div>
            </div>

        </div>
    )
}

export default NewsCards
