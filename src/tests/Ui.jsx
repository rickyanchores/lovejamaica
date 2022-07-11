import React from 'react'
import { ReactComponent as PalmI } from '../assets/palm-tree.svg'


const Ui = () => {
  return (
    <div className="container primary-bg">
        <h1>Love Jamaica</h1>
        <p>lorem ipsum dolor sit amet, consect</p>
        <button className="btn btn-primary">click here</button>
        <PalmI className='bg-icon'/>
    </div>
  )
}

export default Ui