import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'


interface stepprops{
    next:any,
    prev:any
 }
export default function VerificationForm(props:stepprops) {
  return (
    <div>
        <div className="card-light w-full md:w-[500px]">
          <div className="card-body">
          <div className='flex justify-start'>
            <button className='btn btn-ghost text-xl' onClick={props.prev}>
              <FaChevronRight/>
            </button>
        </div>
          <p className='text-xl mb-10'>کد اعتبارسنجی را وارد کنید</p>
                <div className="flex gap-3 mb-5 justify-center">
                <input className='input input-bordered text-3xl w-14 text-end' maxLength={1}/>
                <input className='input input-bordered text-3xl w-14' maxLength={1}/>
                <input className='input input-bordered text-3xl w-14' maxLength={1}/>
                <input className='input input-bordered text-3xl w-14' maxLength={1}/>
                <input className='input input-bordered text-3xl w-14' maxLength={1}/>
                </div>
                <div className="flex justify-center">
                  <button 
                      className="btn-orange  w-full md:w-96 mb-7 items-center" 
                      >
                      بررسی و ادامه
                      <FaChevronLeft/>

                  </button>  
                </div>
              
                <div className="flex justify-end">
                <button className='btn btn-ghost'>
                    ارسال مجدد کد
                </button>
                </div>
          </div>
        </div>
    </div>
  )
}
