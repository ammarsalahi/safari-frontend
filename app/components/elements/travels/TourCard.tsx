import React from 'react'
import { FaBusAlt,FaTrain,FaTaxi,FaClock,FaCalendar} from "react-icons/fa";
import { MdChair } from "react-icons/md";
import { useUrlDirector } from '../global/UrlNavigator';

export default function TourCard() {
   
   const gotourl =useUrlDirector()

  return (
    <div className="card-light card-side my-10">
        <div className="p-10 text-base border-e-2 border-dashed">
              <div className="flex justify-center">
                    <FaBusAlt fontSize={33}/>
              </div>  
              <p>بلیط اتوبوس</p>
        </div>
        <div className="card-body p-10">
            <div className="flex justify-between px-5">
               
               <div>
                  <p className="card-title">آستارا - تهران</p>
                  <span>نام پایانه</span>
               </div>
               <div className="text-md">
                  <div className='flex gap-2 mb-2 items-center'>
                  <FaCalendar fontSize={20}/>
                  <p>دوشنبه ۱۰ آذر</p>
                  </div>
                  <div className='flex gap-2 items-center'>
                  <FaClock fontSize={20}/>
                  <p>12:30</p>
                  </div>
               </div>
               <div className="flex gap-3 items-center text-xl text-blue-800">
                  <MdChair fontSize={30}/>
                  <span>۱۲</span>
               </div>
               <div className='flex gap-3 items-center text-xl font-bold'>
                  <p>320,000تومان</p>
               </div>
            <div className="card-actions">
            <button className="btn-outline-orange" onClick={()=>gotourl("buy-ticket")}>خرید بلیط</button>
            </div>
            </div>
            
        </div>
    </div>
  )
}
