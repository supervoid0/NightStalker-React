import React from 'react'

function Navbar() {
    console.log("navbar rendered")

    return (
        <div className="w-full bg-primary pl-4 pr-4">
            {/*Desktop/*/}
            <div className=" w-full flex flex-row justify-between items-center">
                <div className="p-4">
                    <h1 className="text-white font-serif text-xl tracking-widest">Night Stalker</h1>
                </div>
                <div className="hidden sm:block w-4/12">
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
