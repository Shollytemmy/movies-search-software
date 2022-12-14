import React from 'react'
import { Link } from 'react-router-dom'
// import { IconName } from "react-icons/fa"; SiThemoviedatabase
import {SiThemoviedatabase} from 'react-icons/si'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <nav className='navbar__nav'>
                
                    <h3 className='nav__brand'>
                        <Link to='/' >
                        <SiThemoviedatabase /> Movies Search App
                         </Link>
                    </h3>
                   
                    <ul className='nav__links'>
                        <li className='links__link'>
                            <Link to="/" >Home</Link>
                        </li>

                        <li className='links__link'>
                            <Link to='/about'>About</Link>
                        </li>
                    </ul>

                
            </nav>
            
        </div>
    </div>
  )
}
