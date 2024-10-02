import React from 'react'

export default function QuestionContent() {
  return (
    <div>
      <div className="card-light ">
        <div className="card-body p-10">
            <p className='text-xl font-bold'>پرسش</p>
            <div className="chat chat-start flex justify-center mt-4 mb-10">
            <div className="chat-bubble bg-orange-500 text-white px-5 py-8 cursor-pointer w-full">To be on the Council at your age.</div>
             </div>
             <p className='text-xl font-bold'>پاسخ</p>
            <div className="chat chat-end flex justify-center mt-4 mb-10">
            <div className="chat-bubble bg-orange-500 text-white px-5 py-8 cursor-pointer w-full">To be on the Council at your age.</div>
             </div>
        </div>
      </div>
    </div>
  )
}
