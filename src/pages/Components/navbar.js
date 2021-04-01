
import {Link} from 'gatsby'
import React from 'react'

function navbar() {
    return (
        <div>
             <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
             <Link to="/about">About</Link>
             <Link to="/services">Services</Link>
        </div>
    )
}

export default navbar

