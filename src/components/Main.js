import React from 'react'
import { About } from './About'
import { Blog } from './Blog'
import HomeWelcome from './Body'
import Footer from './Footer'
import Header from './Header'






export default function Main() {
    
    return (
        <div >
        <Header/>
        <HomeWelcome />
        <About/>
        <Blog />
        <Footer/>
        </div>
    )
}
