import React from 'react'
import Posts from './Posts'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'

const PostItem = ({Image,authorId,category,title,des,postId}) => {
    const shortTitle =title.length>40?title.substring(0,40) +'...':title
    const shortDes =des.length>140?des.substring(0,140) +'...':des

  return (
    <article className='post'>
      <div className="post-image">
        <img src={Image} alt="" />
      </div>
      <div className='post-content'>
        <Link to={`/post/${postId}`}>
            <h3>{shortTitle}</h3>
        </Link>
        <p>{shortDes}</p>
        <div className='post-footer'>
           <PostAuthor/>
           <Link to={`/posts/categories/${category}`} className='btn btn-category'>{category}</Link>
        </div>
      </div>
    </article>
  )
}

export default PostItem