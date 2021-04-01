import React from 'react'

import Footer from './Components/Footer'
import Navbar from './Components/navbar'


function Layout({children}) {
    return (
        <>

<Navbar/>

{children}
<Footer/>
            
        </>
    )
}

export default Layout