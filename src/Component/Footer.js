import React from 'react'
import logo1 from "./Pic/f_logo.png"

const Footer = () => {
  return (
    <>
        <footer>
            <div className='container text-center top'>
                <div className='img'>
                    <img src={logo1} alt='' />
                </div>
                <p>© 2022. all right reserved by GorkCoder-Themes.</p>
            </div>
        </footer>
    </>
  )
}

export default Footer