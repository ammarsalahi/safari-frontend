import React from 'react'
import CommentCard from './CommentCard'
import CommentForm from './CommentForm'
import {FaComment} from "react-icons/fa"

export default function Comments() {
  return (
    <div className='px-5 md:px-10'>
      <div className="flex justify-center w-full mb-5">
          <CommentForm/>

      </div>
        <div >
          <p className='text-2xl font-bold my-10 flex gap-5 items-center px-5 '>
            <FaComment className="text-orange-500 text-3xl"/>
            برخی از نظرات شما
          </p>
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <CommentCard/>
          <CommentCard/>
          <CommentCard/>
          <CommentCard/>

        </div>
        </div>
        
    </div>
  )
}
