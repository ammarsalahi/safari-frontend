import React from 'react'
import { FaBusAlt, FaCalendarAlt } from 'react-icons/fa'
import { FaClock } from 'react-icons/fa6'


export default function TicketCardMobile() {
  return (
    <div className="card-light">
    <div className="card-body p-5">
            <div className='flex  gap-10 justify-center mb-5'>
                <FaBusAlt fontSize={30}/>
                <p className='text-xl font-bold '>نام مسافر</p>
            </div>
            <div className='flex justify-between mb-5'>
                <span className="text-lg font-bold">آستارا - تهران</span>
                <span>نام پایانه</span>
            </div>
            <div className='text-base flex justify-between px-3  mb-5'>
                <div className='flex gap-3 items-center'>
                    <FaCalendarAlt/>
                    <span>تاریخ</span>
                </div>
                <div className='flex gap-3 items-center'>
                    <FaClock/>
                    <span>ساعت</span>
                </div>
            </div>
            <div className="flex gap-10 mb-8">
                <p>نام اتوبوس</p>
                <span>شماره صندلی</span>
            </div>
            <div className="text-center font-bold text-success mb-5">
                <p>قیمت بلیط</p>
            </div>
            <button className="btn-orange w-full">
               نمایش
            </button>
        
        </div>
    </div>
  )
}
