import React from 'react'

export default function CommentCard() {
  return (
    <div className="chat chat-end w-full">
  <div className='chat-bubble bg-orange-500 text-white font-bold w-full mb-5'>
        <div className="card-body p-5">
            <p className='py-10'>this is text!!!!!!!!!!!</p>
            <div className="card-actions flex">
              <button className='btn btn-ghost btn-sm bg-orange-600 text-lg gap-2'>
                👍
                13
              </button>
              <button className='btn btn-ghost btn-sm text-lg'>
                 👎
              </button>
              <button className='btn btn-ghost btn-sm text-lg'>
              😁
              </button>
              <button className='btn btn-ghost btn-sm text-lg'>
              😐
              </button>
              <button className='btn btn-ghost btn-sm text-lg gap-2'>
              😔
              15
              </button>
              <button className='btn btn-ghost btn-sm text-lg'>
              😡
              </button>
            </div>
        </div>
    </div>    </div>
  
  )
}
