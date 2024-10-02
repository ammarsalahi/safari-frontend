import React, { useState } from 'react'
import UserPasswordChangeForm from './UserPasswordChangeForm';
import { useUrlDirector } from '../global/UrlNavigator';
import { AiFillSun } from 'react-icons/ai';
import EmailForm from './EmailForm';
import VerificationForm from './VerificationForm';

export default function PasswordSteps() {

       
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
            content:<UserPasswordChangeForm/>
        },
        {
        }
    ]

  return (
    <div className="grid md:grid-cols-5 place-content-center">
    <div></div>
   <div className="md:col-span-3 pt-20 pb-10">
      <div className="card shadow-2xl">
         <div className="card-body p-0">
            <div className="grid grid-cols-2 ">
                 <div className="bg-orange-500 rounded-s-xl py-28 ps-32 text-white">
                       <p className="text-5xl">سفری</p>
                </div>
               <div className="pt-5 pb-16 px-10 text-center">
                   <button className="btn btn-sm btn-circle btn-ghost mb-5 text-lg">
                      <AiFillSun fontSize={25}/>
                   </button>
                   <div className={step==0?"pb-16":""}>
                       {items[step].content}
                   </div>

                  
                </div>
                
            </div>
         </div>
      </div>
   </div>
   <div></div>

</div>
  )
}
