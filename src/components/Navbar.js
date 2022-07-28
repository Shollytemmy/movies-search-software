import React from 'react'
import { Link } from 'react-router-dom'
// import { IconName } from "react-icons/fa"; SiThemoviedatabase
import {SiThemoviedatabase} from 'react-icons/si'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <nav>
                <Link to='/' >
                    <h3>
                        <SiThemoviedatabase /> Movies Search App
                    </h3>
                    <ul>
                        <li>
                            <Link to="/" >Home</Link>
                        </li>
                        
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                    </ul>

                </Link>
            </nav>
        </div>
    </div>
  )
}
