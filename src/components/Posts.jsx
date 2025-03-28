import React, { useState } from 'react'
import { DummyPosts } from '../data/data'
import PostItem from './PostItem'
import Headpost from './Headpost'


const Posts = () => {
   const[posts,setPosts]= useState(DummyPosts)
  return (
    <section className='posts'>
      <div className='head-post-aria'>
         <Headpost/>
      </div>
      {posts.length > 0 ?
       <div className='container posts-container'>
       {posts.map(({id,Image,authorId,category,title,des},index)=><PostItem  key={index} Image={Image} category={category} authorId={authorId} title={title} des={des} postId={id}/>)
       }
       </div> : <h2 className='error-center'>No posts founds</h2>}
    </section>
  )
}

export default Posts