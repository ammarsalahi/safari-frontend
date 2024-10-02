import React, { useState } from 'react'
import { useUrlDirector } from '../global/UrlNavigator';
import ChoiceSeatingForm from './ChoiceSeatingForm';
import TicketInfoForm from './TicketInfoForm';
import SuccessForm from './SuccessForm';
import PurchaseForm from './PurchaseForm';


export default function BuyTicketSteps() {

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
      content:<ChoiceSeatingForm next={onNext}/>
    },
    {
      content:<TicketInfoForm prev={onPrev} next={onNext}/>
    },
    {
      content:<PurchaseForm next={onNext} />
    },
    {
      content:<SuccessForm />
    }
  ]
  return (
    <div>
      <div className="grid md:grid-cols-4">
        <div className="hidden md:block px-10 py-32">
            <ul className="steps steps-vertical text-xl">
              <li className={step >=0?"step step-primary":"step"}>انتخاب صندلی</li>
              <li className={step >= 1 ?"step step-primary":"step"}>ورود اطلاعات</li>
              <li className={step >= 2 ?"step step-primary":"step"}>خرید</li>
              <li className={step ==3 ?"step step-primary":"step"}>نمایش و چاپ</li>

            </ul>
        </div>
        <div className="col-span-3 pb-5 md:pt-24 md:px-16">
            <div className="card-light">
               <div className="card-body py-3 px-7">
                 {items[step].content}
               </div>
            </div>
        </div>
      </div>
    </div>
  )
}
