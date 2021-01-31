import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout(prop) {
    return (
        <div>
            <Navbar/>
            {prop.children}
            
        </div>
    )
}

export default Layout
