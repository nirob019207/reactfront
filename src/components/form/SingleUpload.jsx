import React from 'react'
import icon from "./../../img/upload-2-fill.png"
import { Link } from 'react-router-dom'

function SingleUpload({name}) {
  return (
    <div className='bg-white h-60 w-60 m-4 rounded-xl shadow-lg'>
        <div className='relative flex items-center justify-center flex-col top-4'>
            <div className='text-lg font-semibold'>{name}</div>
            <div className='flex flex-col border-4 p-4 mt-8 cursor-pointer'>
                <img src={icon} alt=""/>
                <Link className='hover:bg-red-600 mb-0'>Browse</Link>
            </div>
        </div>
    </div>
  )
}

export default SingleUpload