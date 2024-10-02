'use client'
import React from 'react'
import { FaChevronLeft,FaVanShuttle } from 'react-icons/fa6'

const TaxiForm = () => {
  return (
    <div>
         <div className="mb-5">
                        <div className="label">
                        <span className="label-text-alt text-base">نام و مدل را کامل وارد کنید</span>
                        </div>
                        <input className='input input-bordered input-warning py-0 w-full'/>
                   </div>
                   <div className="md:flex md:gap-16">
                   <div className="mb-5">
                        <div className="label">
                        <span className="label-text-alt text-base">شماره پلاک</span>
                        </div>
                        <input className='input input-bordered input-warning py-0 w-full'/>
                   </div>
                    <div className="mb-5">
                        <div className="label">
                        <span className="label-text-alt text-base">رنگ وسیله نقلیه</span>
                        </div>
                        <div className="flex gap-5 pt-3">
                            <input type="radio" name="radio-6" className="radio radio-lg radio-warning" defaultChecked />
                            <input type="radio" name="radio-6" className="radio radio-lg radio-secondary"  />
                            <input type="radio" name="radio-6" className="radio radio-lg radio-primary"  />
                            <input type="radio" name="radio-6" className="radio radio-lg radio-accent"  />
                            <input type="radio" name="radio-6" className="radio radio-lg radio-success"  />
                            <input type="radio" name="radio-6" className="radio radio-lg radio-error"  />
                            <input type="radio" name="radio-6" className="radio radio-lg "  />

                        </div>
                    </div>
                   </div>
                  
            <button className='btn-orange w-56 mt-5'>
                تایید
                <FaChevronLeft/>
            </button> 
    </div>
  )
}

export default TaxiForm