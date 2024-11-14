import React from 'react'
import { Link } from "react-router-dom";
// import '../App.css'

export default function navbar() {
    
  return (
    
      <nav className='nav '>
       <ul className='d-flex justify-content-center m-4 '>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link>   </li>        
        <li><Link to="/Sports">Sports</Link>   </li>
        <li><Link to="/Entertainment">Entertainment</Link>   </li>
        <li><Link to="/Health">health</Link>   </li>
        <li><Link to="/Science">science</Link>   </li>
        <li><Link to="/Technology">technology</Link>   </li>
        </ul> 
             
      </nav>
    
  )
}
