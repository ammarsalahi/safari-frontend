import React from 'react'
import { FaBusAlt, FaCalendarAlt } from 'react-icons/fa'
import { FaClock } from 'react-icons/fa6'

export default function TicketCard() {
  return (
    <div className='card-light '>
        <div className="card-body p-7">
            <div className="flex justify-between items-center">
                <div>
                    <FaBusAlt fontSize={40}/>
                </div>
                <div>
                    <p className="text-xl font-bold">نام مسافر</p>
                </div>
                <div>
                    <p className="text-lg font-bold">آستارا - تهران</p>
                    <span>نام پایانه</span>
                </div>
                <div className='text-sm'>
                    <div className='flex gap-3 items-center'>
                        <FaCalendarAlt/>
                        <span>تاریخ</span>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <FaClock/>
                        <span>ساعت</span>
                    </div>
                </div>    
                <div>
                    <p>نام اتوبوس</p>
                    <span>شماره صندلی</span>
                </div>
                <div>
                    <p>قیمت بلیط</p>
                </div>
                <div>
                   <button className="btn-orange">
                      نمایش
                   </button>
                </div>
            </div>
        </div>
    </div>
  )
}
