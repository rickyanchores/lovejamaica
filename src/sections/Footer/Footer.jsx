import React from 'react'
import SocialMedia from '../../components/SocialMedia/SocialMedia';

const Footer = () => {

  /*
  const linkList = [
    {
      name: "Instagram",
      href: "https://www.google.co.uk/"
    },
    {
      name: "Facebook",
      href: "https://www.google.co.uk/"
    },
    {
      name: "ETSY",
      href: "https://www.google.co.uk/"
    }
  ];

  */

  return (
    <div className='Footer'>
      <div className="container">
        <h3>LoveJamaicaShop</h3>
        <SocialMedia />
      </div>
    </div>
  )
}

export default Footer