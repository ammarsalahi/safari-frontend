
import React from 'react'
import TourCard from './TourCard'
import { FaBusAlt,FaTrain,FaTaxi, FaList} from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";
import { FaShuttleVan } from "react-icons/fa";


export default function ListTour() {
  return (
    <div className="lg:px-24 py-10">
      <div className="flex gap-5 justify-start border-b  py-3 px-5">
        <button className="btn btn-ghost">
           <FaList fontSize={22}/>
        </button>
        <button className="btn btn-ghost  bg-orange-500 hover:bg-orange-500 text-white">
           <FaBusAlt fontSize={22}/>
           اتوبوس
        </button>
        <button className="btn btn-ghost">
           <FaShuttleVan fontSize={22}/>
        </button>
         <button className="btn btn-ghost text-2xl">
           <FaTaxi/>
        </button>
        <button className="btn btn-ghost text-2xl">
           <FaTrain/>
        </button>
        <button className="btn btn-ghost text-2xl">
           <IoAirplane/>
        </button>
       
      </div>
      <div className="py-2">
      <TourCard/>

      </div>
      
    </div>
  )
}
