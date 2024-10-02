import React from 'react'
import { IoSend } from "react-icons/io5";

export default function QuestionForm() {
  return (
      <div className=" p-4">
          <p className='pb-5 text-3xl text-center mb-10'>سوال خود را از ما بپرسید</p>
              <div className='mb-5'>
                <input type="email" className='input input-bordered input-warning w-full' placeholder='ایمیل خود را وارد کنید '/>
              </div> 
              <div className='mb-5'>
                <textarea className='textarea textarea-bordered textarea-warning w-full' rows={5} placeholder='متن را وارد کنید'></textarea>
              </div>
          <button className='btn-orange w-full gap-5 text-lg'>
            ارسال
            <IoSend className="rotate-180"/>
          </button>
        </div>
    
  )
}
