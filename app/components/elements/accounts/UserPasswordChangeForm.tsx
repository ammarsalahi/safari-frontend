import React from 'react'
import { AiFillSun } from 'react-icons/ai'
import { FaLock, FaUser } from 'react-icons/fa'

export default function UserPasswordChangeForm() {
  return (
    <div className="pt-5 pb-20 text-center">
                      
                 <p className="pb-12 font-bold text-2xl text-center">تغییر گذرواژه</p>
                 <label className="input input-bordered flex items-center gap-2 mb-5">
                       <FaLock/>
                 <input type="password" className="grow" placeholder="گذرواژه" />
               </label>
               <label className="input input-bordered flex items-center gap-2 mb-5">
                       <FaLock/>
                 <input type="password" className="grow" placeholder="تکرار گذرواژه" />
               </label>
               <button className="btn bg-orange-500 hover:bg-orange-500 w-full text-white">
                  تایید
               </button>
          
    </div>
    
  )
}
