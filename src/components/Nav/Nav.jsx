import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

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
        },

    ]

  return (
    <div className='Nav'>
        <h3>LJ</h3>
        <div className="hamburger">X</div>
        <div className="navlinks">
           {navList.map((link) => (
               <li>
                   <Link smooth to={link.href}>{link.name}</Link>
               </li>
            ))}
        </div>
    </div>
  )
}

export default Nav