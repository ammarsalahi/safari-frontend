
import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { FaChevronLeft } from "react-icons/fa6";

const AddTerminal = () => {
  return (
      <div >
      <div className='card border'>
        <div className="card-body px-10 pt-10">
          <p className="text-xl text-center">اطلاعات موردنظر برای ایجاد پایانه را وارد کنید</p>
          <form>
            <div className='mb-5'>
              <div className="label">
                <span className="label-text-alt text-base">نام پایانه</span>
              </div>
              <input className='input input-bordered input-warning py-0 w-full'/>
            </div>
            <div className='mb-5'>
              <div className="label">
                <span className="label-text-alt text-base">آدرس دفتر اصلی</span>
              </div>
              <textarea className='textarea textarea-bordered textarea-warning w-full'></textarea>
            </div>
            <div className="mb-5">
              <div className="label">
                <span className="label-text-alt text-base ">نوع خدمات سفر پایانه را انتخاب کنید</span>
              </div>
              <div className="flex gap-5 justify-start mmb-5 mt-2">
              <div className="form-control border px-2 rounded-full w-auto" dir="ltr">
                <label className="cursor-pointer label">
                  <span className="label-text mx-2">همه</span>
                  <input type="checkbox" className="checkbox checkbox-warning" />
                </label>
              </div>
             <div className="form-control border px-2 rounded-full w-auto" dir="ltr">
                <label className="cursor-pointer label">
                  <span className="label-text mx-2">حمل‌ونقل زمینی</span>
                  <input type="checkbox" className="checkbox checkbox-warning" />
                </label>
              </div>
               <div className="form-control border px-2 rounded-full w-auto" dir="ltr">
                <label className="cursor-pointer label">
                  <span className="label-text mx-2">حمل‌ونقل ریلی</span>
                  <input type="checkbox" className="checkbox checkbox-warning" />
                </label>
              </div>
               <div className="form-control border px-2 rounded-full w-auto" dir="ltr">
                <label className="cursor-pointer label">
                  <span className="label-text mx-2">حمل‌ونقل هوایی</span>
                  <input type="checkbox" className="checkbox checkbox-warning" />
                </label>
              </div>
              </div>
            </div>
            <div className="mb-5">
              <div className="label">
                <span className="label-text-alt text-lg">نوع خدمات سفر پایانه را انتخاب کنید</span>
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
                <span className="label-text-alt text-base">شهرهای موردنظر را انتخاب کنید</span>
              </div>
            <label className="input input-bordered input-warning flex items-center gap-2">
              <input type="text" className="grow" placeholder="Search" />
               <button className='btn btn-sm rounded-full bg-orange-500 border-orange-500 hover:bg-orange-500 text-white'>
                  افزودن
               </button>
            </label>
            <div className="grid grid-cols-4 my-5 gap-3">

              <div className="bg-orange-400 rounded-full flex gap-3 px-2 py-1 text-white">
               <button className="btn btn-sm btn-ghost">
                <AiOutlineClose/>
              </button>
                 <span>نام شهر</span>
              </div>
            </div>
            </div>
            <div className="mb-5">
             <div className="label">
                <span className="label-text-alt text-base">توضیحاتی در مورد پایانه را وارد کنید (اختیاری)</span>
              </div>
              <textarea className='textarea textarea-bordered textarea-warning w-full'></textarea>
            </div>
            <button className='btn bg-orange-500 text-white w-60 hover:bg-orange-500 mt-5'>
              تایید
              <FaChevronLeft/>
            </button>

          </form>
        </div>

     </div>
     </div>
  )
}

export default AddTerminal