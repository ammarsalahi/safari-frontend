import React from 'react'
import { FaLock, FaUser,FaChevronRight, FaChevronLeft,FaRegAddressCard } from 'react-icons/fa6'
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { Formik } from 'formik';
import { useRecoilState } from 'recoil';
import { ErrorSwal } from '../global/Swals';
import { SignupSelector } from '~/components/states/selectors';
import { Api } from '~/components/api';
import { USER_CHECK_PID } from '~/components/api/endpoints';

interface stepprops{
    next:any,
    prev:any
 }

export default function UserForm(props:stepprops) {

    const [signupvalues,setSignupValues]=useRecoilState(SignupSelector);

    const check_pid=async(pid:string,errors:any)=>{
        await Api.get(USER_CHECK_PID(pid)).then((res)=>{
            errors.pid="این فیلد نمی‌تواند مقدار موردنظر را داشته باشد!!!"
        })
    }
  return (
    <div>
        <div className='flex justify-start'>
            <button className='btn btn-ghost text-xl' onClick={props.prev}>
              <FaChevronRight/>
            </button>
        </div>
        <Formik 
        
        initialValues={{
            fullname:"",
            gender:"",
            pid:""
        }}
        
        validate={(values)=>{
            let errors:any={}
            if(!values.fullname){
              errors.fullname="این فیلد نمی‌تواند بدون مقدار باشد!!!"
            }
            if(!values.gender){
                errors.gender="این فیلد نمی‌تواند بدون مقدار باشد!!!"
            }
            if(!values.pid){
                errors.pid="این فیلد نمی‌تواند بدون مقدار باشد!!!"
              }
            if(values.pid.length<10){
                errors.pid="این فیلد نمی‌تواند مقدار نادرست داشته باشد!!!"
              }
            if(values.pid.length==10){
                check_pid(values.pid,errors)
            }  
            return errors
          }}

        onSubmit={(values)=>{
            setSignupValues({...signupvalues,fullname:values.fullname,pid:values.pid,gender:values.gender})
            props.next()
           
        }}
        >
        {({handleSubmit,values,handleChange,errors,touched})=>(
            <form onSubmit={handleSubmit}>
                <p className='text-xl mb-5'>مشخصات زیر را وارد کنید</p>
                <div>
                    <label className="input input-bordered input-warning rounded-xl flex items-center gap-2">
                        <FaUser className='text-orange-500'/>
                        <input type="text" name="fullname" value={values.fullname} onChange={handleChange} className="grow" placeholder="نام و نام‌خانوادگی" />
                    </label>
                    <div className="label">
                        {errors.fullname && touched.fullname && <span className="label-text-alt text-red-500">{errors.fullname}</span>}
                    </div>
                </div>
                <div>
                <select className="select select-bordered border-2 select-warning w-full rounded-xl" value={values.gender} name='gender' onChange={handleChange}>
                    <option disabled selected>جنسیت خود را انتخاب کنید...</option>
                    <option value="female"> زن</option>
                    <option value="male"> مرد</option>
                </select>
                <div className="label">
                        {errors.gender && touched.gender && <span className="label-text-alt text-red-500">{errors.gender}</span>}
                </div>
                </div>
                <div>
                    <label className="input input-bordered input-warning rounded-xl flex items-center gap-2">
                        <FaRegAddressCard className='text-orange-500 font-bold'/>
                        <input type="text" maxLength={10} name="pid" value={values.pid} onChange={handleChange} className="grow" placeholder="کدملی" />
                    </label>
                    <div className="label">
                        {errors.pid && touched.pid && <span className="label-text-alt text-red-500">{errors.pid}</span>}
                    </div>
                </div>
                
            
                <button 
                    className="btn-orange w-full " 
                    type='submit'
                    disabled={values.fullname=="" && values.gender=="" && values.pid==""}>
                    ادامه
                    <FaChevronLeft/>
                </button>  
            </form>
        )}

        </Formik>
  
    </div>
  )
}
