import React,{useState} from 'react'
import { FaBusAlt, FaTaxi, FaTrain } from 'react-icons/fa'
import { FaChevronLeft,FaVanShuttle } from 'react-icons/fa6'
import { IoAirplane } from 'react-icons/io5'
import BusForm from './BusForm'
import TaxiForm from './TaxiForm'
import VanForm from './VanForm'
import AirplaneForm from './AirplaneForm'


const AddVehicle = () => {
    const [vehicle,setVehicle]=useState("");
    const [isFormLoad,setisFormLoad]=useState(false);
    const handleVehicle=(name:string)=>(e:React.MouseEvent<HTMLElement>)=>{
        setisFormLoad(false)
        setVehicle(name)
        setisFormLoad(true)
    }

  return (
    <div>
        <div className="card-light">
            <div className="card-body p-16">
                    <div className='mb-10'>
                        <div className="label">
                            <span className="label-text-alt text-base">یک مورد را انتخاب کنید</span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
                            <div className={vehicle=="bus"?"selected-vehicle":"unselected-vehicle"}
                                onClick={handleVehicle("bus")}
                            >
                               <div>
                                <FaBusAlt fontSize={45}/>
                                <span className='text-lg'>اتوبوس</span>
                                </div>
                            </div>   
                             <div className={vehicle=="van"?"selected-vehicle":"unselected-vehicle"}
                                onClick={handleVehicle("van")}
                            >
                               <div>
                                <FaVanShuttle fontSize={45}/>
                                <span className='text-lg ms-3'>ون</span>
                                </div>
                            </div>      
                             <div className={vehicle=="taxi"?"selected-vehicle":"unselected-vehicle"}
                                onClick={handleVehicle("taxi")}
                            >
                               <div>
                                <FaTaxi fontSize={45}/>
                                <span className='text-lg'>تاکسی</span>
                                </div>
                            </div>
                          <div className={vehicle=="train"?"selected-vehicle":"unselected-vehicle"}
                                onClick={handleVehicle("train")}
                          >
                               <div>
                                <FaTrain fontSize={45}/>
                                <span className='text-xl'>قطار</span>
                                </div>
                            </div>
                           <div className={vehicle=="airplane"?"selected-vehicle":"unselected-vehicle"}
                                onClick={handleVehicle("airplane")}
                           >
                               <div>
                                <IoAirplane fontSize={45}/>
                                <span className='text-xl'>هواپیما</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {isFormLoad==true ?<div>

                        {vehicle=="bus" && <BusForm/>}
                        {vehicle=="taxi" && <TaxiForm/>}
                        {vehicle=="van" &&  <VanForm/>}
                        {vehicle=="airplane" && <AirplaneForm/>}

                    </div>:
                    <>
                    </>
                    }
                    
            </div>
        </div>
    </div>
  )
}

export default AddVehicle