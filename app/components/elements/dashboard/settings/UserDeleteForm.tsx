import React from 'react'
import { FaLock } from 'react-icons/fa'
import TreeView from '../../global/TreeView'

export default function UserDeleteForm() {
  const urls=[
    {
      name:"داشبورد",
      url:"/dashboard"
    },
  ]
  return (
    <div>
    <div> 
       <TreeView links={urls} page="حذف حساب‌کاربری"/>
        <div className="card  border">
            <div className="card-body px-28 py-20">
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="col-span-2">
                    <label className="input input-bordered flex items-center gap-2 mb-5 ">
                     <FaLock/>
                     <input type="text" className="grow" placeholder="گذرواژه قبلی" />
                    </label>
                    </div>
                    <button className='btn btn-error  text-lg text-white '>
                        تایید
                    </button>
                    </div>
                </form>
            </div>
        </div>
   </div>
</div>
  )
}
