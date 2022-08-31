import React, { useState } from 'react'
import "./Header.css"
import logo from "../Pic/logo.png"

const Header = () => {

        // when scroll header at top 
    window.addEventListener("scroll", function() {
        const header = document.querySelector(".header")
        header.classList.toggle("active", window.scrollY > 100)
    })


    //toggle menu
    const [Mobile, setMobile] = useState(false)

  return (
    <>
        <header className='header'>
            <div className='container d_flex'>
                <div className='logo'>
                    <img src={logo} alt='' />
                </div>

                <div className='navlink'>
                    {/*<ul className='link f_flex uppercase'>*/}
                        <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase "} onClick={() => setMobile(false)}>
                            <li><a href='#home'>Home</a></li>
                            <li><a href='#Projects'>Projects</a></li>
                            <li><a href='#Resume'>Resume</a></li>
                            <li><a href='#Contact'>Contact</a></li>
                            {/* <li>
                                <button className='home-btn'>BUY NOW</button>
                            </li> */}
                        </ul>

                    <button className='toggle' onClick={() => setMobile(!Mobile)}>
                        {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}   
                    </button>
                </div>
            </div>
        </header>

    </>
  )
}

export default Header