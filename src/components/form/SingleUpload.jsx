import React from 'react'
import icon from "./../../img/upload-2-fill.png"

import { Link } from 'react-router-dom'

function SingleUpload({name}) {
  return (
    // <div className='bg-white h-60 w-60 m-4 rounded-xl shadow-lg'>
    //     <div className='relative flex items-center justify-center flex-col top-4'>
    //         <div className='text-lg font-semibold'>{name}</div>
    //         <div className='flex flex-col border-4 p-4 mt-8 cursor-pointer'>
    //             <img src={icon} alt=""/>
    //             <Link className='hover:bg-red-600 mb-0'>Browse</Link>
    //         </div>
    //     </div>
    // </div>

<div class="shadow-xl bg-white flex flex-col items-center rounded-lg p-3">
<h1 class="text-lg font-semibold mb-4">{name}</h1>
<div class="border-dotted border-2 border-gray-300 rounded-md flex flex-col items-center justify-center cursor-pointer">
    <img src={icon} alt="Upload Icon" class="mb-2" />
    <span class="text-gray-700 text-sm text-center leading-tight mb-1">Drag & Drop or</span>
    <span class="text-blue-600 text-sm font-medium underline text-center">Browse</span>
</div>


</div>
  )
}

export default SingleUpload