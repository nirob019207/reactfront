import React from 'react'
import SingleUpload from './SingleUpload'

function Upload() {
  return (
   <div>
     <div class="bg-white mt-2 w-full  px-3 ">
          <div class="grid grid-cols-2 justify-between">
            <ul class="flex gap-3  text-lg text-gray-500">
              <li><img src="image/icon/arrow-left.png" alt="" /></li>
              <li><h1 class="">Create New File</h1></li>
            </ul>
           <div class="flex justify-end">
            <ul class="flex mr-8 text-gray-700 justify-end w-[273px]">
              <li><a href="#">SLI/</a></li>
              <li><a href="#">New File/</a></li>
              <li><a href="#">Create New File</a></li>
            </ul>
           </div>
          </div>
          </div>

          <div class="w-full content-div rounded-lg">
          <div>
              <ol class="flex items-center m-4">
                  <li class="flex w-full items-center after:content-[''] bor after:w-full after:border-b after:border-[10px] after:inline-block"></li>
                  <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-8 after:inline-block">
                    <span class="flex items-center justify-center rounded-full background-top shrink-0">
                      <img src="image/icon/file-upload-line.png" alt="" class="p-2" />
                      <span class="absolute mt-16 hidden xs:hidden sm:block md:block lg:block xl:block ">Document Upload</span>
                    </span>
                  </li>
                  <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-8 after:inline-block">
                    <span class="flex items-center justify-center rounded-full wiz background-wiz shrink-0">
                      <img src="image/icon/file-user-line.png" alt="" class="p-2"  />
                      <span class="absolute mt-16 hidden xs:hidden sm:block md:block lg:block xl:block">Photograph</span>
                    </span>
                  </li>
                  <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-8 after:inline-block">
                    <span class="flex items-center justify-center rounded-full background-wiz shrink-0">
                      <img src="image/icon/user-voice-line.png" alt="" class="p-2" />
                      <span class="absolute mt-16 hidden xs:hidden sm:block md:block lg:block xl:block">Interview</span>
                    </span>
                  </li>
                </ol>
          </div>

          <div class="mx-4 grid grid-cols-1 gap-16 xs:grid xs:grid-cols-1 xs:gap-10 sm:grid sm:grid-cols-2 sm:gap-10 md:grid md:grid-cols-2 md:gap-10 mt-8 lg:grid lg:grid-cols-3 lg:gap-10 xl:grid xl:grid-cols-4 xl:gap-5">
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