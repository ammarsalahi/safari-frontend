import React from 'react'
import { BsQrCode } from 'react-icons/bs'
import { FaBusAlt } from 'react-icons/fa'

export default function TicketResult() {
  return (
    <div className="card-light bg-white text-black border  card-side rounded-lg">
    <div className='px-16 text-center text-xl border-e-2 border-dashed border-orange-300'>
      <div className="py-10 text-center">
           <BsQrCode fontSize={100}/>
       </div>
       <p>نام مسافر</p>
       <br/>
       <p className="text-4xl font-bold">۱۲</p>
      
    </div>
    <div className="card-body text-base p-0 ">
       <div className='flex gap-10 justify-start py-5 px-10 text-xl items-center border-b'>
           <FaBusAlt fontSize={30}/>
           <p>بلیط اتوبوس</p>
       </div>
       <div className="grid grid-cols-2 gap-5  h-full p-5">
          <div>
          <div className="flex gap-3 mb-5">
            <span>مبدا</span>
            <span className="font-bold">آستارا</span>
          </div>
          <div className="flex gap-4 mb-10">
            <span>تاریخ</span>
            <span className="font-bold">1403/2/2</span>
          </div>
            <span className="font-bold">نام پایانه</span>
          </div>
          <div>
           
               <div className="flex gap-8 mb-5">
                <span>مقصد</span>
                <span className="font-bold">آستارا</span>
              </div>
              <div className="flex gap-8 mb-5">
                <span>ساعت </span>
                <span className="font-bold">13:00</span>
              </div>

          </div>
         
         
         
       </div>
      <div className="flex justify-start py-5 px-10 text-xl border-t">
        <p>قیمت بلیط</p>
        <p>320,000 تومان</p>
      </div>
    </div>
     <div className="bg-orange-500  py-28 px-10 text-center text-white text-2xl font-bold rounded-e-lg ">
            <p>سفری</p>
            <p>safari.ir</p>
          </div>
  </div>
  )
}
