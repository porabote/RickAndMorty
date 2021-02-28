import React from 'react'
import {NavLink} from 'react-router-dom'

import './header.scss'

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <h3>
                    <NavLink to="/">
                        Rick and Morty
                    </NavLink>
                </h3>
            </div>
            <nav className="top-menu">
                <div>
                    <NavLink to="/">Characters</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Header