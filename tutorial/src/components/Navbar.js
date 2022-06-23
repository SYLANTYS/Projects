import React from 'react'
import { FaGlobeAmericas } from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav>
      <FaGlobeAmericas color='white'size={24}/>
      <h3 className='nav--title'>my travel journal.</h3>
    </nav>
  )
}
