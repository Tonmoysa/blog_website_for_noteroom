
import React, { useState } from 'react'
// import { DummyPosts } from '../data/data'
// import PostItem from '../components/PostItem'

const CreatePosts = () => {
  // const[posts,setPosts]= useState(DummyPosts)
  const [title,setTitle]=useState('')
  const [category,setCategory]=useState('uncategorized')
  const [description,setDescription]=useState('')
  const [thumbImage,setthumbImage]=useState('')

const postCategories=['Education','Discovery','Agrecultrue','Entertainment','Music','Art','Business','Investment','Fashion','Sports','Science','Weather']

const modules={
  toolbar:[
    [{'header':[1,2,false]}],
    ['bold','italic','underline','strike','blockquote'],
    [{'list':'ordered'},{'list':'bullet'},{'indent':'+1'},{'indent':'-1'}],
    ['link','image'],
    ['clean']
  ]
}

const formats=[
  'header',
  'bold','italic','underline','strike','blockquote',
  'list','bullet','indent',
  'link','image',

]

  return (
    <section className='authorPosts createPosts'>

      <div className='container form-container createPosts-container'>
           <h2>Create Posts</h2>
           <form action="" className=' form createPosts-form'>
             <p className='form-message'>This is the invalid message</p>
             <input type="text" placeholder='Title' name='title' value={title} required onChange={(e)=>setTitle(e.target.value)} autoFocus/>
             <select name="category" value={category} onChange={e=>setCategory(e.target.value)} id="">
              {
                postCategories.map(cat=><option key={cat} value={cat}>{cat}</option>)
              }
             </select>
             <input type="text" placeholder='Description' name='description' value={description} required onChange={(e)=>setDescription(e.target.value)} autoFocus/>

             <input type="file" value={thumbImage} required onChange={(e)=>setthumbImage(e.target.value)} accept='png,jpg,jpeg'/>

           </form>
      </div>

    {/* {posts.length > 0 ?
     <div className='container authorPosts-container'>
     {posts.map(({id,Image,authorId,category,title,des},index)=><PostItem  key={index} Image={Image} category={category} authorId={authorId} title={title} des={des} postId={id}/>)
     }
     </div> : <h2 className='error-center'>No posts founds</h2>} */}
  </section>
  )
}
// 
export default CreatePosts