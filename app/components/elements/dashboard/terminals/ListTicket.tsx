
import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaTrashAlt,FaEdit } from 'react-icons/fa'
import { FaAnglesLeft,FaTrain,FaFire, FaTaxi, FaVanShuttle } from 'react-icons/fa6'
import { IoAirplane } from 'react-icons/io5'
import { FaBusAlt,FaClock,FaCalendar,FaPlus} from "react-icons/fa";
import { AiOutlineSortAscending } from "react-icons/ai";
import { useNavigate } from 'react-router-dom'

const ListTicket = () => {
   let navigate=useNavigate()

   const goto= (url:string) =>(e:React.MouseEvent<HTMLElement>)=>{
    e.preventDefault()
    navigate(url)
  }

  return (
    <div className='card-light'>
        <div className="card-body">
            <div className="flex justify-between p-5">
              <p className="text-xl">لیست بلیط‌ها</p>
              <button className="btn-orange  btn-sm rounded-xl" onClick={goto("/dashboard/terminals/tickets/add")}> 
                <FaPlus/>
                افزودن
              </button>
            </div>
            <div className="flex justify-start gap-4 py-5 items-center">
              <label className="input input-bordered input-sm flex rounded-full items-center gap-2 w-full">
                <CiSearch/>
                <input type="text" className="grow" placeholder="جستجو" />
              </label>
              <button className='btn btn-ghost btn-circle'>
                <AiOutlineSortAscending fontSize={25}/>
              </button>
              <button className='btn btn-ghost btn-circle'>
                <FaFire fontSize={20}/>
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
              <ul className="list-none grid grid-cols-1 divide-y">
                <li className="item-light">
                <div className="flex justify-between items-center p-5">
                    <label>
                      <input type="checkbox" className="checkbox checkbox-warning" />
                    </label>
                      <div className="flex items-center text-base">
                         <span>شماره شناسایی بلیط</span>
                      </div>
                      <div className="flex items-center text-base">
                         <span> صاحب بلیط</span>
                      </div>

                      <div>
                          <div className='flex items-center justify-center text-base gap-5'>
                              <span>آستارا</span>
                              <div>
                                <FaAnglesLeft/>
                              </div>
                              <span>تهران</span>
                          </div>
                          <div className='flex items-center gap-5 text-sm'>
                              <span>سه‌شنبه ۱۲ آذر - ۰۹:۱۰</span>
                              <span>نام اتوبوس</span>
                          </div>
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
    <li className="item-light">
                <div className="flex justify-between items-center p-5">
                    <label>
                      <input type="checkbox" className="checkbox checkbox-warning" />
                    </label>
                      <div className="flex items-center text-base">
                         <span>شماره شناسایی بلیط</span>
                      </div>
                      <div className="flex items-center text-base">
                         <span> صاحب بلیط</span>
                      </div>

                      <div>
                          <div className='flex items-center justify-center text-base gap-5'>
                              <span>آستارا</span>
                              <div>
                                <FaAnglesLeft/>
                              </div>
                              <span>تهران</span>
                          </div>
                          <div className='flex items-center gap-5 text-sm'>
                              <span>سه‌شنبه ۱۲ آذر - ۰۹:۱۰</span>
                              <span>نام اتوبوس</span>
                          </div>
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




export default ListTicket