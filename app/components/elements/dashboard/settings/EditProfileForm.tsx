import React from 'react'
import { FaCalendar, FaEnvelope, FaPhone, FaUser, FaUserCircle } from 'react-icons/fa'
import TreeView from '../../global/TreeView'

export default function EditProfileForm() {
    const urls=[
        {
          name:"داشبورد",
          url:"/dashboard/"
        },
      ]
  return (
    <div>
        <div> 
          <TreeView links={urls} page="ویرایش حساب کاربری"/>
            <div className="card-light">
                <div className="card-body px-10">
                    <form>
                        <div className='flex justify-center'>
                            <div className='rounded-full mb-10 py-6'>
                            <FaUserCircle fontSize={60}/>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <div>
                                    <span className="label-text-alt text-lg">نام و نام‌خانوادگی</span>
                                    <label className="input input-bordered flex items-center gap-2 mb-5 mt-2">
                                    <FaUser/>
                                    <input type="text" className="grow" placeholder="نام و نام‌خانوادگی" />
                                </label>


                                <span className="label-text-alt text-lg">کد ملی</span>
                                <label className="input input-bordered flex items-center gap-2 mb-5 mt-2">
                                    <FaUser/>
                                    <input type="text" className="grow" placeholder="کد ملی" />
                                </label>
                            </div>
                            <div>
                                <span className="label-text-alt text-lg">ایمیل</span>
                                <label className="input input-bordered flex items-center gap-2 mb-5 mt-2">
                                    <FaEnvelope/>
                                    <input type="text" className="grow" placeholder="ایمیل" />
                                
                                </label>
                                
                                <span className="label-text-alt text-lg">تاریخ تولد</span>
                                <label className="input input-bordered flex items-center gap-2 mb-5 mt-2">
                                    <FaCalendar/>
                                    <input type="text" className="grow" placeholder="تاریخ تولد" />
                                </label>
                            </div>
                        </div>

                        <span className="label-text-alt text-lg">رنگ داشبورد</span>
                        <div className="flex gap-5 py-5">
                            <input type="radio" name="radio-6" className="radio radio-lg radio-warning" defaultChecked />
                            <input type="radio" name="radio-6" className="radio radio-lg radio-secondary"  />
                            <input type="radio" name="radio-6" className="radio radio-lg radio-primary"  />
                            <input type="radio" name="radio-6" className="radio radio-lg radio-accent"  />
                            <input type="radio" name="radio-6" className="radio radio-lg radio-success"  />
                            <input type="radio" name="radio-6" className="radio radio-lg radio-error"  />
                        </div>
                        <button className='btn bg-orange-500 hover:bg-orange-500 text-lg text-white w-64 mt-5'>
                            تایید
                        </button>
                    </form>
                </div>
            </div>
       </div>
    </div>
  )
}
