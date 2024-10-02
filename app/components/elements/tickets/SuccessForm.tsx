import React from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import { RiPrinterFill } from "react-icons/ri";
import { BsQrCode } from "react-icons/bs";
import { FaBusAlt } from 'react-icons/fa';
import TicketResult from './TicketResult';


export default function SuccessForm() {
  return (
    <div className="pt-10">
		     <TicketResult/>
         <div className="py-10 flex justify-center">
                <button className="btn btn-success text-white">
                   چاپ
                   <RiPrinterFill fontSize={20}/>
                </button>
             </div>
    </div>
  )
}
