import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaTrashAlt,FaEdit, FaPlus } from 'react-icons/fa'
import { FaAnglesLeft,FaTrain,FaFire, FaTaxi, FaVanShuttle } from 'react-icons/fa6'
import { IoAirplane } from 'react-icons/io5'
import { FaBusAlt,FaClock,FaCalendar} from "react-icons/fa";
import { AiOutlineSortAscending } from "react-icons/ai";
import { useNavigate } from 'react-router-dom'


const ListTravel = () => {

  let navigate=useNavigate()

  const goto= (url:string) =>(e:React.MouseEvent<HTMLElement>)=>{
    e.preventDefault()
    navigate(url)
  }

  return (
    <div className='card-light'>
    <div className="card-body">

      <div className="flex justify-between p-5">
              <p className="text-xl">لیست وسایل‌نقلیه</p>
              <button className="btn-orange  btn-sm rounded-xl" onClick={goto("/dashboard/terminals/travels/add")}> 
                <FaPlus/>
                افزودن
              </button>
        </div>
        <div className="flex justify-start gap-5 p-5 items-center">
          <label className="input input-bordered input-sm flex rounded-full items-center gap-2 w-full">
            <CiSearch/>
            <input type="text" className="grow" placeholder="جستجو" />
          </label>
          <button className='btn btn-ghost btn-circle'>
            <AiOutlineSortAscending fontSize={25}/>
          </button>
          <button className='btn btn-ghost btn-circle'>
            <FaCalendar fontSize={20}/>
          </button>
          <button className='btn btn-ghost btn-circle'>
            <FaTaxi fontSize={20}/>
          </button>
          <button className='btn btn-ghost btn-circle'>
                <FaVanShuttle fontSize={20}/>
              </button>
          <button className='btn btn-ghost btn-circle'>
            <FaBusAlt fontSize={20}/>
          </button>
          <button className='btn btn-ghost btn-circle'>
            <FaTrain fontSize={20}/>
          </button>
          <button className='btn btn-ghost btn-circle'>
            <IoAirplane fontSize={20}/>
          </button>
          
        </div>
        <div className="overflow-x-auto">
          <ul>
            <li className="border-b hover:bg-base-300  cursor-pointer">
           
            <div className="flex justify-between items-center p-5">
                    <label>
                      <input type="checkbox" className="checkbox checkbox-warning" />
                    </label>
                      <div className="flex items-center  gap-5">
                      <p className='text-base'>آستارا</p>
                      <div>
                        <FaAnglesLeft/>
                      </div>
                      <p className='text-base'>تهران</p>
                      
                      </div>
                      <div className="flex items-center gap-3">
                         <span>سه‌شنبه ۱۲ آذر</span>
                         <span>۰۹:۳۰</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaBusAlt/>
                        <span>نام اتوبوس</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>تعداد صندلی</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>مبلغ</span>
                      </div>
                      <div className="flex gap-5">
                          <button className="btn btn-ghost btn-circle btn-sm text-blue-500">
                            <FaEdit fontSize={20}/>
                          </button>
                          <button className="btn btn-ghost btn-circle btn-sm text-red-500">
                            <FaTrashAlt fontSize={20}/>
                          </button>
                      </div>
                </div>
                
            </li>

          </ul>
      
        </div>
    <div className="items-center flex justify-center pt-5">
          <div className="join">
              <input
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label="1"
              defaultChecked />
              <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
              <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
              <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
          </div>
    </div>
    </div>
  
</div>
  )
}

export default ListTravel