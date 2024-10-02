import React from 'react'
import { FaCheck } from 'react-icons/fa6'

export default function CardForm() {
  return (
    <div>
        <div className="p-4">

            <div className='mb-5'>
              <div className="label">
                <span className="label-text-alt text-base">شماره کارت</span>
              </div>
              <input className='input input-bordered input-warning py-0 w-full'/>
            </div> 
            <div className='mb-5'>
              <div className="label">
                <span className="label-text-alt text-base">تاریخ انقضا</span>
              </div>
              <div className="flex gap-10 pe-10 ps-2">
               <input className='input input-bordered input-warning py-0 w-28 text-center text-lg' placeholder='ماه'/>
               <input className='input input-bordered input-warning py-0 w-28 text-center text-lg' placeholder='سال'/>
              </div>
            </div> 
            <button className='btn-orange w-full gap-5'>
                تایید
                <FaCheck fontSize={20}/>
            </button>
        </div>
    </div>

  )
}
