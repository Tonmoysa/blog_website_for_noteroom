import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa"; 
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const[isNavShow,setIsNavShow]=useState(window.innerWidth>1024?true:false)
  const closeNavHandler=()=>{
    if(window.innerWidth<1024){
      setIsNavShow(false)
    }else{
      setIsNavShow(true)
    }
  }
  return (
    <nav>
       <div className='nav-container'>
            <Link className='nav-logo' to={'/'} onClick={closeNavHandler}>
            <img className='logo' src="https://www.noteroom.co/assets/apple-touch-icon.png" alt="" />
            </Link>

          {isNavShow &&  <ul className='nav-menu'>
              <li><Link to={'/profile/id'} onClick={closeNavHandler}>Home</Link></li>
              <li><Link to={'/create'}onClick={closeNavHandler}>Create Posts</Link></li>
              <li><Link to={'/author'}onClick={closeNavHandler}>Author</Link></li>
              <li><Link to={'/logout'}onClick={closeNavHandler}>Logout</Link></li>
            </ul>}

            <button className='nav-toggle-button ' onClick={()=>setIsNavShow(!isNavShow)}>
              {
                isNavShow? <AiOutlineClose />:<FaBars />
                 
              }
               
               
            </button>
       </div>
    </nav>
  )
}

export default Header