import React, { useState } from 'react'
import VerificationForm from './VerificationForm';
import UserForm from './UserForm';
import TerminalForm from './PasswordForm';
import { AiFillSun } from 'react-icons/ai';
import { FaFaceSmile } from 'react-icons/fa6';
import { useUrlDirector } from '../global/UrlNavigator';
import EmailForm from './EmailForm';
import { Link } from '@remix-run/react';

export default function () {

   
    const [step,setStep]=useState(0);
    const gotourl =useUrlDirector()
   

    const onNext=()=>{
        setStep(step+1);
    }
    const onPrev=()=>{
        setStep(step-1);
    }
    const items=[
        {
            content:<EmailForm next={onNext}/>
        },
        {
            content:<VerificationForm prev={onPrev} next={onNext}/>
        },
        {
            content:<UserForm prev={onPrev} next={onNext}/>
        },
        {
            content:<TerminalForm prev={onPrev}/>
        }
    ]

    
  return (
    <div className="grid md:grid-cols-6 place-content-center">
     <div></div>
    <div className="md:col-span-4 ">
       <div className="card shadow-2xl h-screen md:h-[500px] 2xl:h-[600px]  border-2 border-orange-400 ">
          <div className="card-body p-0 ">
             <div className="grid md:grid-cols-2 h-full">
                <div className="bg-orange-500 rounded-s-xl pt-36 ps-32 text-white">
                        <p className="text-5xl">سفری</p>
                 </div>
                <div className="pt-5 px-10 text-center">
                    <button className="btn btn-sm btn-ghost mb-5 text-lg">
                       <AiFillSun fontSize={25}/>
                    </button>
                    <div>
                        {items[step].content}
                    </div>
               
                   { step==0 &&<Link to={"/signin"} className="btn btn-ghost mt-3">
                        حساب کاربری دارم
                        <span className='text-2xl'>😉</span>
                    </Link>}
                 </div>
                 
             </div>
          </div>
       </div>
    </div>
    <div></div>

 </div>
  )
}
