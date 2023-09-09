import React from 'react'
import SingleUpload from './SingleUpload'

function Upload() {
  return (
   <div>
    <div className='flex justify-between'>
        <div>Create New File</div>
        <div>SLI/
New File/
Create New File</div>
    </div>
    <div className='bg-slate-200'>
        <div className=''>jfj</div>
    <div className='grid grid-cols-1 justify-end sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
        <SingleUpload name='Proposal Form'/>
        <SingleUpload name='Identity Document'/>
        <SingleUpload name='Medical Certificate'/>
        <SingleUpload name='Salary Certificate'/>
      
    </div>
    </div>
   </div>
  )
}

export default Upload