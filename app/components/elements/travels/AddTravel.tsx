import React from 'react'
import { FaBusAlt,FaTrain,FaTaxi,FaCheck} from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";
import { FaArrowLeft, FaCalendar } from "react-icons/fa6";

export default function AddTravel() {
  return (
  <div>
    <div className='pb-10 flex gap-7 justify-center items-center text-orange-500'>
       <div className="card rounded-2xl shadow-xl">
        <div className="card-body">
         <div className='flex gap-10 '>
            <p className='text-4xl font-bold'>از</p>
            <input className='input input-ghost bg-base-200 w-36 text-2xl text-center text-blue-700' placeholder='مبدا'/>
            <p className='text-4xl font-bold'>به</p>
            <input className='input input-ghost bg-base-200 w-36 text-2xl text-center text-blue-700' placeholder='مقصد'/>
            <FaCalendar className='text-[40px] text-orange-500'/>
            <input type='datetime' className='input input-ghost bg-base-200 w-32 text-2xl text-center text-blue-700' placeholder='امروز'/>
            <button className='btn-orange text-xl'>
              میخواهم سفر کنم
            <FaArrowLeft/>
            </button>
            </div>
        </div>
        </div>
       
    </div>
    </div>
  )
}
