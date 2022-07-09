import React from 'react'
import Card from '../../components/Card/Card'

const Projects = () => {
  return (
    <div className='Projects' id='projects'>
        <h3>Projects</h3>
        <div className="container">
          <Card />
          <Card />
          <Card/>
        </div>
    </div>
  )
}

export default Projects