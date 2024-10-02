import React from 'react'
import { CiSearch } from 'react-icons/ci'
import TicketResult from './TicketResult'
import TicketCard from './TicketCard'
import TicketCardMobile from './TicketCardMobile'

export default function SearchList() {
  return (
    <div className="px-5 lg:px-20">
        <div className="flex justify-center">
        <label className="input input-bordered input-warning  flex rounded-xl items-center gap-2 w-full md:w-[500px]">
          <CiSearch className="text-orange-500 text-2xl"/>
          <input type="text" className="grow" placeholder="شماره موبایل یا کدملی را برای جستجو وارد کنید..." />
        </label>
        </div>
      
        <div className="block md:hidden py-5">
             <TicketCardMobile/>

        </div>
        <div className="hidden md:block py-10">
            <TicketCard/>
        </div>
    </div>
  )
}
