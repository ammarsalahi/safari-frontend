import React from 'react'

import { HiOfficeBuilding } from "react-icons/hi";
import { FaBusAlt,FaBook,FaComment } from "react-icons/fa";
import { PiCurrencyDollarFill } from "react-icons/pi";
import { AiFillAppstore ,AiFillThunderbolt} from 'react-icons/ai'
import { FaCreditCard, FaMessage } from 'react-icons/fa6'
import { IoMdSettings } from 'react-icons/io'
import { IoTicket } from 'react-icons/io5'
import { TiWorld } from 'react-icons/ti'
import { useNavigate } from 'react-router-dom';
import { useUrlDirector } from './UrlNavigator';

export default function Sidebar() {

      const gotourl=useUrlDirector()
      
  return (
    <div>
    <div className="bg-orange-500 shadow-xl text-white lg:px-5 sticky top-0 h-screen">
               <div className="py-3 text-center border-b" onClick={()=>gotourl("/")}>
                 <button className="font-bold text-3xl">سفری</button>
               </div>
               <div className="pt-4">
               		<p className="text-2xl text-center">نام ترمینال</p>

               		<ul className="menu text-lg py-10">

                           <li className="flex my-2 cursor-pointer text-lg" onClick={()=>gotourl("/dashboard")}>
                              <span>
                              <AiFillAppstore fontSize={30}/>
                                 صفحه اصلی
                              </span>
                           </li>
                           <li className='my-2 cursor-pointer'>
                                 <details>
                                    <summary className='flex  justify-between'>
                                    <span className="flex items-center gap-5 text-lg">
                                       <HiOfficeBuilding fontSize={30}/>
                                       پایانه
                                       </span>
                                    </summary>
                                    <ul>
                                    <li onClick={()=>gotourl("/dashboard/terminals")}><a>
                                    <IoMdSettings/>
                                    تنطیمات پایانه
                                    </a></li>
                                    <li onClick={()=>gotourl("/dashboard/terminals/tickets")}><a>
                                    <IoTicket/>
                                    بلیط‌ها
                                    </a></li>
                                    <li onClick={()=>gotourl("/dashboard/terminals/vehicles")}><a>
                                    <FaBusAlt/>
                                    وسایل نقلیه
                                    </a></li>
                                    <li onClick={()=>gotourl("/dashboard/terminals/travels")}><a>
                                    <TiWorld/>
                                    سفرها
                                    </a></li>

                                    </ul>
                                 </details>
                           </li>

                           <li className="my-2 cursor-pointer">
                           <details>
                                    <summary className='flex  justify-between'>
                                    <span className="flex items-center gap-5 text-lg">
                                       <PiCurrencyDollarFill fontSize={30}/>
                                       پرداخت ها
                                       </span>
                                    </summary>
                                    <ul>
                                    <li onClick={()=>gotourl('/dashboard/payments/cards')}><a>
                                    <FaCreditCard/>
                                    کارت‌های بانکی
                                    </a></li>
                                    <li onClick={()=>gotourl('/dashboard/payments/transactions')}><a>
                                    <AiFillThunderbolt/>
                                    تراکنش‌ها
                                    </a></li>
                                 </ul> 
                                 </details> 
                           </li>
                            <li className="my-2 cursor-pointer">
                                 <details>
                                    <summary className='flex  justify-between'>
                                       <span className="flex items-center gap-5 text-lg">
                                             <FaMessage fontSize={25}/>
                                             پیام ها
                                       </span>
                                    </summary>
                                    <ul>
                                       <li onClick={()=>gotourl('/dashboard/messages/discontents')}><a>
                                          <FaBook/>
                                          شکایت‌ها
                                       </a></li>
                                       <li onClick={()=>gotourl('/dashboard/messages/comments')}><a>
                                          <FaComment/>
                                          نظرات‌
                                       </a></li>
                                    </ul> 
                                 </details> 
                           </li>
               		</ul>

               		
   </div>
   </div>
      </div>
  )
}
