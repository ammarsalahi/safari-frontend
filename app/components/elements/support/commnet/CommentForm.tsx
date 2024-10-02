import React from 'react'
import { IoSend } from "react-icons/io5";
export default function CommentForm() {
  return (
    <div className='card-light w-full md:w-[650px]'>
        <div className="card-body p-8">
            <p className='text-lg font-bold mb-3 text-center'>نظر خود را برای بهبود سایت با ما در میان بگذارید</p>
            <input 
                type="email" className="input input-bordered input-warning w-full mb-5"
                placeholder='ایمیل خود را وارد کنید...'
            />
            <textarea 
                className='textarea textarea-bordered textarea-warning mb-5 w-full' rows={5}
                placeholder='نظر خود را وارد کنید...'
            />
            <button className='btn-orange w-60 gap-5'>
                ارسال
                <IoSend className='rotate-180'/>
            </button>
        </div>
    </div>
  )
}
