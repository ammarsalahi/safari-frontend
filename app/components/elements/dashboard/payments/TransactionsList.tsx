import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaEye } from 'react-icons/fa6'

export default function TransactionsList() {
  return (
    <div>
    <div className='card-light'>
    <div className="card-body">
        <p className='text-2xl text-center font-bold mb-10'>تراکنش‌ها</p>
        <div className="mb-8">
            <label className="search-input w-full md:w-[450px]">
                <CiSearch/>
                <input type="text" className="grow" placeholder="جستجو" />
            </label>
        </div>
    
        <div className="overflow-x-auto">
            <ul>
                <li className="border-b hover:bg-base-300  cursor-pointer hover:rounded-md">
                    <div className="flex justify-between items-center p-5 gap-16">
                       <p>نوع تراکنش</p>
                       <div>
                        <p className='font-bold mb-2'>نام کارت</p>
                        <span className="text-sm">شماره کارت</span>
                       </div>
                       <div>
                        <p className='font-bold mb-2'>نام کارت</p>
                        <span className="text-sm">شماره کارت</span>
                       </div>
                       <p>موفق</p>
                       <button className='btn btn-ghost'>
                            مشاهده
                            <FaEye className="text-blue-700"/>
                        </button>
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
  
</div>
  )
}
