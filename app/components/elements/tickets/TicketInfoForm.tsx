import React from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'

interface stepprops{
  prev:any 
  next:any
}

export default function TicketInfoForm(props:stepprops) {
  return (
    <div className="px-10">
        <div className="flex justify-between mb-5 items-center ">
          <button className='btn btn-circle' onClick={props.prev}>
            <FaAngleRight/>
            </button>
            <p className="text-lg text-center">اطلاعات موردنظر را وارد کنید </p>
        </div>
       <div className='mb-5'>
          <div className="label">
            <span className="label-text-alt text-base">نام و نام‌خانوادگی</span>
          </div>
          <input type="text" className="input input-bordered input-warning w-full"/>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
        <div className='mb-5'>
          <div className="label">
            <span className="label-text-alt text-base">کد ملی</span>
          </div>
          <input type="text" className="input input-bordered input-warning w-full"/>
        </div>
        <div className='mb-5'>
          <div className="label">
            <span className="label-text-alt text-base">جنسیت</span>
          </div>
          <select className="select select-warning select-bordered w-full ">
                <option disabled selected>---</option>
                <option>مرد</option>
                <option>زن</option>
          </select>
        </div>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
           <div className='mb-5'>
          <div className="label">
            <span className="label-text-alt text-base">شماره‌تلفن‌همراه</span>
          </div>
          <input type="text" className="input input-bordered input-warning w-full"/>
        </div>
        </div>
     
        <button className="btn-orange w-64 gap-10 text-base" onClick={props.next}>
          ادامه
          <FaAngleLeft/>
        </button>
    </div>
  )
}
