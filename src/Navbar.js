import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className="nav1">
            <div className="title">
                <NavLink to="/">
                <h1>MovieApp</h1>

                </NavLink>
               
                

            </div>
        </div>
    )
}

export default Navbar
