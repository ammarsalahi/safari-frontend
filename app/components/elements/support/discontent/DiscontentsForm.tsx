import React from 'react'
import { IoSend } from 'react-icons/io5'

interface stepprops{
    next:any
}
export default function DiscontentsForm(props:stepprops) {
  return (
    <div>
        <div className="card-light w-full md:w-[750px]">
            <div className="card-body p-10">
                <p className='text-xl mb-10 font-bold text-center'>اطلاعات موردنظر را وارد کنید</p>
                <input className="input input-bordered input-warning mb-5" placeholder='عنوان شکایت'/>
                <div className="flex gap-10">
                    <input className="input input-bordered input-warning mb-5 w-full" placeholder='نام پایانه موردنظر'/>
                    <input  className="input input-bordered input-warning mb-5 w-full" placeholder='تاریخ انجام اتفاق'/>
                </div>

                <input className="input input-bordered input-warning mb-5 w-full" placeholder='ایمیل شما'/>
                <textarea name="" rows={6} className='textarea textarea-bordered textarea-warning mb-5 w-full' placeholder='توضیحات کامل خود را وارد کنید...'></textarea>
                <button className='btn-orange w-full md:w-64' onClick={props.next}>
                    <IoSend className="rotate-180"/>
                    ارسال
                </button>
            </div>
        </div>
    </div>
  )
}
