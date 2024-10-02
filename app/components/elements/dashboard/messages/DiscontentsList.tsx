import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaEye } from 'react-icons/fa6'
import { useUrlDirector } from '../../global/UrlNavigator'

export default function DiscontentsList() {
    const gotourl=useUrlDirector()
  return (
    <div className='card-light'>
        <div className="card-body">
            <p className='text-2xl text-center font-bold mb-10'>شکایت‌ها</p>
            <label className="search-input w-full md:w-[450px] mb-8">
                <CiSearch/>
                <input type="text" className="grow" placeholder="جستجو" />
            </label>
            <div className="overflow-x-auto">
                <ul>
                    <li className="border-b hover:bg-base-300  cursor-pointer hover:rounded-md"
                        onClick={()=>gotourl('/dashboard/messages/discontents/1234')}
                    >
                        <div className="flex justify-between items-center p-7">
                            <p className='text-xl'>عنوان</p>
                            <p className="text-base">تاریخ</p>
                            <div className="flex gap-5 items-center text-lg">
                                <p>مشاهده شده</p>
                                <FaEye/>
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
