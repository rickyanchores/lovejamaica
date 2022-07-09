import React from 'react'
import { NavLink as Link } from 'react-router-dom'

const Nav = () => {

    const navList = [
        {
            name: "Home",
            href: "#"
        },
        {
            name: "About",
            href: "#about"
        },
        {
            name: "Projects",
            href: "#projects"
        }

    ]

  return (
    <div className='Nav'>
        <h3>LJ</h3>
        <div className="hamburger">X</div>
        <div className="navlinks">
           {navList.map((link) => (
               <li>
                   <Link to={link.href}>{link.name}</Link>
               </li>
            ))}
        </div>
    </div>
  )
}

export default Nav