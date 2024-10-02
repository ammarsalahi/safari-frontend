import React, { useState } from 'react'
import VerificationForm from './VerificationForm';
import DiscontentsForm from './DiscontentsForm';
import { useUrlDirector } from '../../global/UrlNavigator';

export default function DiscontentSteps() {

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
            content:<DiscontentsForm next={onNext}/>
        },
        {
            content:<VerificationForm prev={onPrev} next={onNext}/>
        },
  
    ]

  return (
    <div>
        {items[step].content}
    </div>
  )
}
