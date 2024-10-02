
import React from 'react'
import { FaChevronLeft,FaVanShuttle } from 'react-icons/fa6'

const AirplaneForm = () => {
  return (
    <div>
        <div className="mb-5">
            <div className="label">
                <span className="label-text-alt text-base">نام و مدل را کامل وارد کنید</span>
            </div>
            <input className='input input-bordered input-warning py-0 w-full'/>
        </div>
        <div className="mb-5">
            <div className="label">
                <span className="label-text-alt text-base">تعداد صندلی</span>
            </div>
            <input className='input input-bordered input-warning py-0 w-full md:w-auto'/>
        </div>
        <button className='btn-orange w-56 mt-5'>
                تایید
                <FaChevronLeft/>
        </button> 
    </div>
  )
}

export default AirplaneForm