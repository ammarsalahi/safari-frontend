import React from 'react'
import { FaLock } from 'react-icons/fa'
import TreeView from '../../global/TreeView'

export default function ChangePasswordForm() {
  const urls=[
    {
      name:"داشبورد",
      url:"/dashboard"
    },
  ]
  return (
    <div>
      <TreeView links={urls} page="تغییر گذرواژه" />  
        <div className="card-light">
            <div className="card-body px-28 py-16">
                <form>
                    <label className="input input-bordered flex items-center gap-2 mb-5 mt-2">
                     <FaLock/>
                     <input type="text" className="grow" placeholder="گذرواژه قبلی" />
                    </label>

                     <label className="input input-bordered flex items-center gap-2 mb-5 mt-2">
                        <FaLock/>
                        <input type="text" className="grow" placeholder="گذرواژه جدید" />
                     </label>
                    <label className="input input-bordered flex items-center gap-2 mb-5 mt-2">
                        <FaLock/>
                        <input type="text" className="grow" placeholder="تکرار گذرواژه جدید" />
                     </label>
                    <button className='btn bg-orange-500 hover:bg-orange-500 text-lg text-white w-full mt-5'>
                        تایید
                    </button>
                </form>
            </div>
        </div>
  </div>
  )
}
