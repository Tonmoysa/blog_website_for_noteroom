import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import postDtailImage from '../assets/1.jpg'

const PostDtail = () => {
  return (
    <section>
      <div className="container postdtail-container">
         <div className='postdtail-top'>
              <PostAuthor/>
             
                  <div className='postdtail-buttons'>
                     <Link to={'/posts/werwer/edit'} className='btn btn-sm btn-primary'>
                        Edit
                     </Link>
                     <Link to={'/posts/werwer/delete'} className='btn btn-sm btn-danger'>
                        Delete
                     </Link>
                  </div>
              
         </div>
         <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
         <div className='postdtail-image'>
            <img src={postDtailImage} alt="" />
         </div>
         <div className='postdtail-para'>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium ipsa animi dolorum beatae in accusantium, soluta voluptatum quaerat officiis ea nihil, doloribus excepturi incidunt facilis, veniam officia sint laborum culpa!</p>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium ipsa animi dolorum beatae in accusantium, soluta voluptatum quaerat officiis ea nihil, doloribus excepturi incidunt facilis, veniam officia sint laborum culpa!</p>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium ipsa animi dolorum beatae in accusantium, soluta voluptatum quaerat officiis ea nihil, doloribus excepturi incidunt facilis, veniam officia sint laborum culpa!</p>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium ipsa animi dolorum beatae in accusantium, soluta voluptatum quaerat officiis ea nihil, doloribus excepturi incidunt facilis, veniam officia sint laborum culpa!</p>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium ipsa animi dolorum beatae in accusantium, soluta voluptatum quaerat officiis ea nihil, doloribus excepturi incidunt facilis, veniam officia sint laborum culpa!</p>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium ipsa animi dolorum beatae in accusantium, soluta voluptatum quaerat officiis ea nihil, doloribus excepturi incidunt facilis, veniam officia sint laborum culpa!</p>
         </div>
         


      </div>
    </section>
  )
}

export default PostDtail