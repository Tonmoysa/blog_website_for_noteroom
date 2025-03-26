import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
   <section>
    <div className='error-center'>
      <h1>404</h1>
      
      <h3>opps,This Page is Not Found</h3>
      <Link to={'/'} className='btn btn-primary'>Go Back Home</Link>
    </div>
   </section>
  )
}

export default ErrorPage