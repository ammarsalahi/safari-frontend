import { Formik } from 'formik'
import React from 'react'
import { FaPhone } from 'react-icons/fa'
import { FaChevronLeft, FaEnvelope } from 'react-icons/fa6'
import { useRecoilState } from 'recoil'
import Swal from 'sweetalert2'
import { ErrorSwal } from '../global/Swals'
import { Api } from '~/components/api'
import { VALIDATION_EMAIL } from '~/components/api/endpoints'
import { SignupSelector } from '~/components/states/selectors'

interface stepprops{
  next:any,
}
export default function EmailForm(props:stepprops) {

   const [signupvalues,setSignupValues]=useRecoilState(SignupSelector);

  return (
    <div className='pt-10'>
      <Formik
      initialValues={{
        email:""
      }}
      validate={(values)=>{
        let errors:any={}
        if(!values.email){
          errors.email="این فیلد نمی‌تواند بدون مقدار باشد!!!"
        }
        return errors
      }}
      onSubmit={(values)=>{
        

        Api.post(VALIDATION_EMAIL,{email:values.email,types:"register"}).then((res)=>{
          setSignupValues({
            ...signupvalues,
            email:values.email,
          });
          props.next()
        }).catch((err)=>{
          ErrorSwal("متاسفانه استفاده از این آدرس ایمیل امکان‌پذیر نیست!")
        })
      }}
      >
        {({handleSubmit,values,handleChange,errors,touched})=>(
          <form onSubmit={handleSubmit}>
            <p className='text-xl my-6'>ایمیل خود را وارد کنید</p>
               <div>
                  <label className="input input-bordered input-warning flex items-center gap-2 text-start">
                      <FaEnvelope className='text-orange-500'/>
                      <input type="email" name='email' dir='ltr' value={values.email} onChange={handleChange} className="grow text-end" placeholder="me@example.com" />
                  </label>

                   <div className="label mb-3">
                   {errors.email && <span className="label-text-alt text-base text-red-500">{errors.email}</span>}
                  </div>
               </div>
              
              <button 
                  className="btn bg-orange-500 hover:bg-orange-500 w-full text-white mb-9"
                  type="submit"
                  >
                  ادامه
                  <FaChevronLeft/>
              </button> 
          </form>
          
        )}
            

      </Formik>
         
    </div>
  )
}
