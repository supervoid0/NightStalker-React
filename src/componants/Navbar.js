import React from 'react'

function Navbar() {
    return (
        <div className="w-full bg-primary pl-4 pr-4">
            {/*Desktop/*/}
            <div className="hidden w-full sm:flex flex-row justify-between items-center">
                <div className="w-4/12 text-white p-4 font-serif ">
                    <h1 className="text-xl tracking-widest">Night Stalker</h1>
                </div>
                <div className="w-4/12">
                    <ul className="flex flex-row text-white justify-end">
                        <li className="p-4">Home</li>
                        <li className="p-4">Blog</li>
                        <li className="p-4">Contact</li>
                    </ul>
                </div>
            </div>
            {/*Mobile*/}
        </div>
    )
}

export default Navbar