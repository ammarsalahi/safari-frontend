import React, { useState } from 'react'
import { FaCheck, FaChevronRight, FaUser,FaLock } from 'react-icons/fa6'
import { useRecoilState, useRecoilValue } from 'recoil';
import { Formik } from 'formik';
import { ErrorSwal } from '../global/Swals';
import { SignupSelector, TokenSelector } from '~/components/states/selectors';
import { USER_SIGNUP } from '~/components/api/endpoints';
import { Api } from '~/components/api';

interface stepprops{
    prev:any
}


export default function PasswordForm(props:stepprops) {

    // const [signupvalues,setSignupValues]=useRecoilState(SignupSelector);
    const signupvalues=useRecoilValue(SignupSelector);
    const [token,setToken]=useRecoilState(TokenSelector);
    const [showpass,setShowpass]=useState(false);


  return (
    <div>
        <div className='flex justify-start'>
            <button className='btn btn-ghost text-xl' onClick={props.prev}>
              <FaChevronRight/>
            </button>
        </div>
        <Formik
            initialValues={{
                password:"",
                re_password:""
            }}
            validate={(values)=>{
                let errors:any={}
                if(!values.password){
                    errors.password="این فیلد نمی‌تواند بدون مقدار باشد!!!"
                }
                if(!values.re_password){
                    errors.re_password="این فیلد نمی‌تواند بدون مقدار باشد!!!"
                }
                if(values.password!= values.re_password){
                    errors.re_password="گذرواژه‌ها برابر نیستند!!!"
                }
                return errors
            }}
            onSubmit={(values)=>{
                Api.post(USER_SIGNUP,{
                    personal_id:signupvalues.pid,
                    full_name:signupvalues.fullname,
                    password:values.password,
                    email:signupvalues.email,
                    gender:signupvalues.gender
                }).then((res)=>{ 
                    setToken(res.data.access_token);

                }).catch((err)=>{
                    ErrorSwal("متاسفانه امکان ایجاد حساب وجود ندارد!!!");
                    console.log(signupvalues)
                    console.log(err)
                })
            }}
        >
         {({handleSubmit,values,handleChange,errors,touched})=>(
            <form onSubmit={handleSubmit}>
                <p className='text-xl mb-10'>گذرواژه خود را وارد کنید</p>
                <div>
                    <label className="input input-bordered input-warning flex items-center gap-2">
                        <FaLock className='text-orange-500'/>
                        <input type={showpass?"text":"password"} name="password" value={values.password} onChange={handleChange} className="grow" placeholder="گذرواژه" />
                    </label>
                    <div className="label">
                        {errors.password && touched.password && <span className="label-text-alt text-base text-red-500">{errors.password}</span>}
                    </div>
                </div>
                <div>
                    <label className="input input-bordered input-warning flex items-center gap-2">
                        <FaLock className='text-orange-500'/>
                        <input type={showpass?"text":"password"} name="re_password" value={values.re_password} onChange={handleChange} className="grow" placeholder="تکرار گذرواژه" />
                    </label>
                    <div className="label">
                            {errors.re_password && touched.re_password && <span className="label-text-alt text-red-500">{errors.re_password}</span>}
                    </div>
                </div>
                    <div className="form-control w-36 mb-3">
                    <label className="cursor-pointer label">
                        <input 
                            type="checkbox" 
                            checked={showpass}
                            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setShowpass(e.target.checked)}
                            className="checkbox checkbox-warning" 
                        />
                        <span className="label-text text-base">نمایش گذرواژه</span>
                    </label>
                    </div>
                <button 
                    className="btn-orange w-full"
                    type='submit'
                >
                    تایید
                    <FaCheck/>
                </button>  
            </form>    

         )}
        </Formik>
         
    </div>
  )
}
