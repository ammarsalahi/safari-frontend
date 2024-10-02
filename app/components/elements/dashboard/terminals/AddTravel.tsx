import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FaChevronLeft } from 'react-icons/fa'

export default function AddTravel() {
  return (
    <div>
      <div className='card-light'>
        <div className="card-body px-10 pt-10">
          <p className="text-xl text-center">اطلاعات موردنظر برای ایجاد سفر را وارد کنید</p>
          <form>
            <div className="grid md:grid-cols-2 gap-10 py-3">
            <div className='mb-5'>
              <div className="label">
                <span className="label-text-alt text-base">مبدا</span>
              </div>
              <input className='input input-bordered input-warning py-0 w-full'/>
            </div>
            <div className='mb-5'>
              <div className="label">
                <span className="label-text-alt text-base">مقصد</span>
              </div>
              <input className='input input-bordered input-warning py-0 w-full'/>
            </div>
            </div>
          
            
            <div className="mb-5">
              <div className="label">
                <span className="label-text-alt text-lg">روز(های) سفر را انتخاب کنید</span>
              </div>
              <div className="grid md:grid-cols-5 px-2 gap-2 mb-5 mt-2">
              <div className="form-control border px-2 rounded-full w-auto" dir="ltr">
                <label className="cursor-pointer label">
                  <span className="label-text mx-2">همه</span>
                  <input type="checkbox" className="checkbox checkbox-warning" />
                </label>
              </div>
             <div className="form-control border px-2 rounded-full w-auto" dir="ltr">
                <label className="cursor-pointer label">
                  <span className="label-text mx-2">شنبه</span>
                  <input type="checkbox" className="checkbox checkbox-warning" />
                </label>
              </div>
               <div className="form-control border px-2 rounded-full w-auto" dir="ltr">
                <label className="cursor-pointer label">
                  <span className="label-text mx-2">یکشنبه</span>
                  <input type="checkbox" className="checkbox checkbox-warning" />
                </label>
              </div>
               <div className="form-control border px-2 rounded-full w-auto" dir="ltr">
                <label className="cursor-pointer label">
                  <span className="label-text mx-2">دوشنبه</span>
                  <input type="checkbox" className="checkbox checkbox-warning" />
                </label>
              </div>
              <div className="form-control border px-2 rounded-full w-auto" dir="ltr">
                <label className="cursor-pointer label">
                  <span className="label-text mx-2">دوشنبه</span>
                  <input type="checkbox" className="checkbox checkbox-warning" />
                </label>
              </div>
              <div className="form-control border px-2 rounded-full w-auto" dir="ltr">
                <label className="cursor-pointer label">
                  <span className="label-text mx-2">دوشنبه</span>
                  <input type="checkbox" className="checkbox checkbox-warning" />
                </label>
              </div>
              <div className="form-control border px-2 rounded-full w-auto" dir="ltr">
                <label className="cursor-pointer label">
                  <span className="label-text mx-2">پنجشنبه</span>
                  <input type="checkbox" className="checkbox checkbox-warning" />
                </label>
              </div>
              <div className="form-control border px-2 rounded-full w-auto" dir="ltr">
                <label className="cursor-pointer label">
                  <span className="label-text mx-2">جمعه</span>
                  <input type="checkbox" className="checkbox checkbox-warning" />
                </label>
              </div>
              </div>
            </div>

            <div className="mb-5">
              <div className="label">
                <span className="label-text-alt text-base">وسیله نقلیه را انتخاب کنید</span>
              </div>
              <select className="select select-warning select-bordered w-96 ">
                <option disabled selected>انتخاب وسیله</option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
            <div className="mb-5">
             <div className="label">
                <span className="label-text-alt text-base">توضیحاتی در مورد سفر را وارد کنید (اختیاری)</span>
              </div>
              <textarea className='textarea textarea-bordered textarea-warning w-full'></textarea>
            </div>
            <button className='btn bg-orange-500 text-white w-60 hover:bg-orange-500'>
              تایید
              <FaChevronLeft/>
            </button>

          </form>
        </div>

     </div>
     </div>
  )
}
