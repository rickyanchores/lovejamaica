import React from 'react'

//* DATA
import { side_menu } from './data'

const SideBar = () => {
  return (
    <nav id="sidebar" className='nav side-nav'>
      {
        side_menu.map(item => {
          return(
            <div className="menu-item" key={`item-menu-${item.name}`}>{item.name}</div>
          )
        })
      }
    </nav>
  )
}

export default SideBar