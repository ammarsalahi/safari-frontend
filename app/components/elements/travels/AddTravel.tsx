import React from 'react'
import { FaBusAlt,FaTrain,FaTaxi,FaCheck} from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa6";

export default function AddTravel() {
  return (
  <div>
    <div className='pb-10 flex justify-center'>
       <div className="card-light">
        <div className="card-body">
         <div className='flex gap-10 '>
            <p className='text-4xl'>از</p>
            <input className='input input-ghost bg-base-200 w-36 text-2xl text-center text-blue-700' placeholder='مبدا'/>
            <p className='text-4xl'>به</p>
            <input className='input input-ghost bg-base-200 w-36 text-2xl text-center text-blue-700' placeholder='مقصد'/>
            <button className='btn-orange'>
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
