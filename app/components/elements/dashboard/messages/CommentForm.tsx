import React from 'react'
import { FaCheck } from 'react-icons/fa6'

export default function CommentForm() {
  return (
    <div>
          <div className=" p-4">
          <p className='pb-5 text-3xl text-center'>پاسخ نظر</p>
          <div className='mb-5'>
              <div className="label">
                <span className="label-text-alt text-base"> نظر خود را وارد کنید</span>
              </div>
              <textarea className='textarea textarea-bordered textarea-warning w-full' rows={5}></textarea>
            </div> 
          <button className='btn-orange w-full gap-5 text-lg'>
            تایید
            <FaCheck className="rotate-180"/>
          </button>
        </div>
    </div>
  )
}
