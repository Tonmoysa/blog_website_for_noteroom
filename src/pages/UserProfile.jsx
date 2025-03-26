import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PfofileImage from '../assets/a8.jpg'
import { FaEdit } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

const UserProfile = () => {
  const[profileImage,setProfileImage]=useState('')
  return (
    <section className='profile'>
      <div className='container profile-container'>
          <Link to={'/myposts/id'}>
          My Posts
          </Link>
          <div className='profile-details'>
            <div className='profile-wrapper'>
              <div className='profile-image'>
                <img src={PfofileImage} alt="" />
              </div>
              
              <form className='profile-image-form'>
                 <input type="file" name='profile-image' id='profile-image' accept='png,jpg,jpeg' onChange={e=>setProfileImage(e.target.files[0])}/>
                 <label htmlFor="profile-image">
                    <FaEdit />
                 </label>
              </form>
              <button className='profile-image-button '>
              <FaCheckCircle />
              </button>
            </div>
            <h2>Beg Joker</h2>
       
           



          </div>
      </div>
    </section>
  )
}

export default UserProfile