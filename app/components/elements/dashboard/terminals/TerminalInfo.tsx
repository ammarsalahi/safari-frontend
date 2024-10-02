import React from 'react'
import AddTerminal from './AddTerminal'
import { FaPlus } from "react-icons/fa6";
import { FaChevronLeft } from 'react-icons/fa6';
import { FaBusAlt,FaTrain,FaTaxi, FaList,FaTrashAlt} from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { IoMdSettings } from 'react-icons/io'
import { IoTicket } from 'react-icons/io5'
import { TiWorld } from 'react-icons/ti'
import { useNavigate } from 'react-router-dom';


const TerminalInfo = () => {
   let navigate=useNavigate()

   const goto=(url:string)=>(e:React.MouseEvent<HTMLElement>)=>{
      navigate(url)
   }
  return (

    <div className="card bg-base-100 w-full shadow-xl">
    <figure>
      <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Shoes"
        className="w-full h-64" />
    </figure>
    <div className="card-body">
      <div className="flex justify-between mb-7 items-center">
            <p className="text-2xl">نام پایانه</p>
            <div className="flex gap-5">
            <button className="btn-outline-orange btn-circle text-2xl">
              <MdEdit/>
            </button>
             <button className="btn-outline-error btn-circle text-xl">
              <FaTrashAlt/>
            </button>
             
            </div>
           
      </div>
      <div className="bg-base-300 p-5 rounded-lg">
       <p className="text-base">
        آدرس پایانه
      </p>
      </div>
     
      <div className='mt-10'>
        <div className="label">
                <span className="label-text-alt text-base">نوع خدمات سفر پایانه</span>
        </div>
        <div className="grid md:grid-cols-5 gap-4 mt-2">
          <div className="flex gap-3 items-center bg-base-300 p-3 rounded-full">
             <FaBusAlt fontSize={20}/>
            <span>
              حمل‌ونقل زمینی
            </span>
            </div>
            <div className="flex gap-3 items-center bg-base-300 p-3 rounded-full">
             <FaTrain fontSize={20}/>
            <span>
              حمل‌ونقل ریلی
            </span>
            </div>
            <div className="flex gap-3 items-center bg-base-300 p-3 rounded-full">
             <IoAirplane fontSize={20}/>
            <span>
              حمل‌ونقل هوایی
            </span>
            </div>
        </div>
      </div>
      <div className='mt-10'>
        <div className="label">
                <span className="label-text-alt text-base">روزهای خدمات‌رسانی پایانه</span>
        </div>
        <div className="grid sm:grid-cols-4 md:grid-cols-8 gap-4 mt-2">
            <div className=" items-center bg-base-300 p-2 text-center text-lg rounded-full">
              <span>
              شنبه
              </span>
            </div>
           <div className=" items-center bg-base-300 p-2 text-center text-lg rounded-full">
              <span>
              یکشنبه
              </span>
            </div>
            <div className=" items-center bg-base-300 p-2 text-center text-lg rounded-full">
              <span>
              سه شنبه
              </span>
            </div>
        </div>
      </div>
       <div className='mt-10'>
        <div className="label">
                <span className="label-text-alt text-base">شهرهای خدمات‌رسانی پایانه</span>
        </div>
        <div className="grid sm:grid-cols-4 md:grid-cols-8 gap-4 mt-2">
            <div className=" items-center bg-base-300 p-2 text-center text-lg rounded-full">
              <span>
              تهران
              </span>
            </div>
           <div className=" items-center bg-base-300 p-2 text-center text-lg rounded-full">
              <span>
              آستارا
              </span>
            </div>
            <div className=" items-center bg-base-300 p-2 text-center text-lg rounded-full">
              <span>
               رشت 
              </span>
            </div>
        </div>
      </div>
       <div className="bg-base-300 p-5 rounded-lg mt-10">
       <p className="text-base">
        توضیحات پایانه
      </p>
      </div>

      <div className="my-10 grid md:grid-cols-3 gap-5 text-white">
          <div className="mini-card" onClick={goto("/dashboard/terminals/vehicles")}>
             <div className="card-body p-4">
               <div className="flex justify-between gap-20">
                  <div className="flex items-center gap-3">
                   <FaBusAlt fontSize={35}/>
                   <p className="text-xl">وسایل‌نقلیه</p>
                 </div>
                 <p className="text-3xl">۵</p>
               </div>
             </div>
          </div>
          <div className="mini-card" onClick={goto("/dashboard/terminals/travels")}>
             <div className="card-body p-4">
               <div className="flex justify-between gap-28">
                  <div className="flex items-center gap-3">
                   <TiWorld fontSize={40}/>
                   <p className="text-xl">سفرها</p>
                 </div>
                 <p className="text-3xl">۵</p>
               </div>
             </div>
          </div>
          <div className="mini-card" onClick={goto("/dashboard/terminals/tickets")}>
             <div className="card-body p-4">
               <div className="flex justify-between gap-28">
                  <div className="flex items-center gap-3">
                   <IoTicket fontSize={40}/>
                   <p className="text-xl">بلیط‌ها</p>
                 </div>
                 <p className="text-3xl">۵</p>
               </div>
             </div>
          </div>
      </div>
    </div>
  </div>
  )
}

export default TerminalInfo