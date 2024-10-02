import React from 'react'
import { FaAngleLeft } from 'react-icons/fa'

interface stepprops{
    next:any
}
export default function PurchaseForm(props:stepprops) {
  return (
    <div className="px-10">
        <div className='mb-5'>
            <p className='mb-10 text-xl text-center'>پرداخت مبلغ بلیط</p>
            <div className="flex justify-start gap-5 items-center">
                <span>مبلغ پرداختی</span>
                <span className="text-green-600 text-xl font-bold">320,000 تومان</span>
            </div>
        </div>
        <div className='mb-5'>
          <div className="label">
            <span className="label-text-alt text-base">شماره کارت را وارد کنید</span>
          </div>
          <input type="text" className="input input-bordered input-warning w-full"/>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
            <div className='mb-5'>
                <div className="label">
                    <span className="label-text-alt text-base">CVV2</span>
                </div>
                <input type="text" className="input input-bordered input-warning w-full"/>
            </div>
            <div className='mb-5'>
                <div className="label">
                    <span className="label-text-alt text-base">تاریخ انقضا</span>
                </div>
                <input type="text" className="input input-bordered input-warning w-full"/>
            </div>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
            <div className='mb-5 mt-2'>
                <div className="label">
                    <span className="label-text-alt text-base">عدد موردنظررا وارد کنید</span>
                </div>
                <input type="text" className="input input-bordered input-warning w-full"/>
            </div>

            <div className='mb-5'>
                <div className="label">
                    <span className="label-text-alt text-base">رمز دوم را وارد کنید</span>
                    <button className="btn-sm btn-orange rounded-lg">دریافت</button>
                </div>
                <input type="text" className="input input-bordered input-warning w-full"/>
            </div>
        </div>
        <button className="btn-orange w-64 gap-10 text-base" onClick={props.next}>
          ادامه
          <FaAngleLeft/>
        </button>
    </div>
  )
}
