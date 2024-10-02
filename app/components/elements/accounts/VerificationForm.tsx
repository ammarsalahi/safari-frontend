import { Formik } from 'formik';
import React, { useRef, useState } from 'react'
import { FaCheck, FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import Swal from 'sweetalert2';
import { Api } from '~/components/api';
import { VALIDATION_CODE } from '~/components/api/endpoints';

interface stepprops{
   next:any,
   prev:any
}
export default function VerificationForm(props:stepprops) {
  const inputRefs=useRef<(HTMLInputElement|null)[]>([]);
  const [combinedValue, setCombinedValue] = useState<string>('');

  const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
       const { value } = event.target;
    
        // Move to the next input if the current input has a value and is not the last one
        if (value && index < inputRefs.current.length - 1) {
          inputRefs.current[index + 1]?.focus(); // Move to the next input
        }
    
        // After all inputs are filled, join the values
        joinInputValues();
    };
    const joinInputValues = () => {
          const values = inputRefs.current.map((input) => input?.value ?? ''); // Get values from refs
          setCombinedValue(values.join('')); // Join the values into a single string
      };

    const onSubmitVerification=()=>{
        props.next()
    }  
  return (
    <div className='pt-10'>
        <div className='flex justify-start'>
            <button className='btn btn-ghost text-xl' onClick={props.prev}>
              <FaChevronRight/>
            </button>
        </div>
        <Formik
          initialValues={{
            verify:false
          }}
          validate={()=>{
            let errors:any={}
            if(combinedValue.length<6){
              errors.verify="کد را بصورت کامل وارد کنید"
            }
          }}
          onSubmit={()=>{
            Api.post(VALIDATION_CODE,{code:combinedValue,types:"register"}).then((res)=>{
              props.next()
            }).catch((err)=>{
              Swal.fire({
                title:"متاسفانه کد وارد شده درست نیست!",
                icon:"error",
                text:err,
                showCloseButton:false,
                showConfirmButton:true,
                confirmButtonText:"باشه",
                confirmButtonColor:"#f97316"
              })
            })
          }}

        >
          {({handleSubmit,errors,touched})=>(

            <form onSubmit={handleSubmit}>
              <p className='text-xl mb-10'>کد اعتبارسنجی را وارد کنید</p>
                <div className="flex gap-1 mb-3 justify-center" dir="ltr">
                  {Array(6).fill(0).map((_,idx:number)=>(
                      <input 
                        key={idx}
                        ref={(element)=>inputRefs.current[idx]=element}
                        className='input input-bordered input-warning text-2xl w-12'
                        maxLength={1}
                        onChange={(event) => handleInputChange(idx, event)}
                      />
                  ))}
                </div>
                <div className="label mb-3">
                  {errors?.verify && <span className='text-red-500 label-text-alt text-base'></span>}
                </div>
                <button 
                    className="btn-orange w-full mb-5 items-center" 
                    type='submit'
                    >
                    بررسی و ادامه
                    <FaChevronLeft/>
                </button>  
            </form>
          )}

        </Formik>
      
        <div className="flex justify-end">
          <button className='btn btn-ghost'>
              ارسال مجدد کد
          </button>
        </div>
    </div>
  )
}

