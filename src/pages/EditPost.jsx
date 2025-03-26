import React, { useState } from 'react'


const EditPost = () => {
  const [title,setTitle]=useState('')
    const [category,setCategory]=useState('uncategorized')
    const [description,setDescription]=useState('')
    const [thumbImage,setthumbImage]=useState('')

    const postCategories=['Education','Discovery','Agrecultrue','Entertainment','Music','Art','Business','Investment','Fashion','Sports','Science','Weather']

  return (
  <section className='editPost'>
       <div className='container form-container editPost-container'>
           <h2>Edit Posts</h2>
           <form action="" className=' form editPost-form'>
             <p className='form-message'>This is the invalid message</p>
             <input type="text" placeholder='Title' name='title' value={title} required onChange={(e)=>setTitle(e.target.value)} autoFocus/>
             <select name="category" value={category} onChange={e=>setCategory(e.target.value)} id="">
              {
                postCategories.map(cat=><option key={cat} value={cat}>{cat}</option>)
              }
             </select>
             <input type="text" placeholder='Description' name='description' value={description} required onChange={(e)=>setDescription(e.target.value)} autoFocus/>

             <input type="file" value={thumbImage} required onChange={(e)=>setthumbImage(e.target.value)} accept='png,jpg,jpeg'/>
            <button type='submit' className='btn btn-primary'>Update</button>
           </form>
      </div>
  </section>
  )
}

export default EditPost