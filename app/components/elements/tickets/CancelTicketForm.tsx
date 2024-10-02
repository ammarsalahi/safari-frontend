import React from 'react'
import { CiSearch } from 'react-icons/ci'
import TicketCard from './TicketCard'

export default function CancelTicketForm() {
  return (
    <div>
<div className="px-10 md:px-28">
        <div className="flex justify-center">
        <label className="input input-bordered input-warning  flex rounded-xl items-center gap-2 w-full md:w-[580px]">
          <CiSearch className="text-orange-700 text-xl"/>
          <input type="text" className="grow" placeholder="شماره موبایل, کدملی یا شماره بلیط را برای جستجو وارد کنید..." />
        </label>
        </div>
      
      <div className="py-14">
        <TicketCard/>
      </div>
    </div>
    </div>
  )
}
