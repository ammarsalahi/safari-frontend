import React from 'react'
import { AiFillSun } from 'react-icons/ai'
import {  FaLock, FaUser } from 'react-icons/fa'
import { useUrlDirector } from '../global/UrlNavigator'
import { FaCheck, FaEnvelope } from 'react-icons/fa6'
import { Formik } from 'formik'
import { useRecoilState } from 'recoil'
import { ErrorSwal } from '../global/Swals'
import { TokenSelector } from '~/components/states/selectors'
import { USER_SIGNIN } from '~/components/api/endpoints'
import { Api } from '~/components/api'

export default function SigninForm() {
    const gotourl = useUrlDirector();
    const [token,setToken]=useRecoilState(TokenSelector);

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 place-content-center">
      <div></div>
    <div className="col-span-1 md:col-span-4">
       <div className="card shadow-2xl h-screen md:h-[500px] 2xl:h-[600px]  border-2 border-orange-400 ">
          <div className="card-body p-0 ">
             <div className="grid md:grid-cols-2 h-full">
                <div className="md:pt-5 md:px-10 text-center">

                       <div className="block md:hidden mb-5 py-10 bg-orange-500 text-white">
                            <p className="text-4xl">سفری</p>
                       </div>
                        
                        <button className="btn btn-sm btn-ghost mb-10 text-lg">
                           <AiFillSun fontSize={25}/>
                        </button>
                        <Formik
                           initialValues={{
                              username:"",
                              password:""
                           }}
                           validate={(values)=>{
                              let errors:any={}
                              if (!values.username){
                                 errors.username="این فیلد نمی‌تواند بدون مقدار باشد!!!"
                              }
                              if(!values.password){
                                 errors.password="این فیلد نمی‌تواند بدون مقدار باشد!!!"
                              }
                              return errors
                           }}
                           onSubmit={(values)=>{
                              
                              const data=new FormData()
                              data.append("username",values.username)
                              data.append("password",values.password)

                              Api.post(USER_SIGNIN,data).then((res)=>{
                                    setToken(res.data.access_token);
                                    gotourl("/dashboard")
                              }).catch((err)=>{
                                 ErrorSwal("اطلاعات به درستی وارد نشده است!!!");
                                 
                              })
                           }}
                        >
                        {({handleSubmit,values,handleChange,errors,touched})=>(
                           <form onSubmit={handleSubmit}>
                                  <p className="pb-12 font-bold text-2xl text-center">ورود کاربر</p>
                                     <div className='mb-2'>
                                       <label className="input input-bordered input-warning rounded-xl flex items-center gap-2">
                                             <FaUser className='text-orange-500'/>
                                          <input 
                                             type="text" name="username" value={values.username} onChange={handleChange} 
                                             className="grow" placeholder="ایمیل یا کدملی"
                                          />
                                        </label>
                                        <div className="label">
                                                {errors.username && touched.username && <span className="label-text-alt text-red-500">{errors.username}</span>}
                                       </div>
                                     </div>
                                     
                                    <div className='mb-2'>
                                       <label className="input input-bordered input-warning rounded-xl flex items-center gap-2">
                                                <FaLock className='text-orange-500'/>
                                          <input 
                                             type="password" name="password" value={values.password} onChange={handleChange}
                                             className="grow" placeholder="گذرواژه" 
                                          />
                                       </label>
                                       <div className="label">
                                                {errors.password && touched.password && <span className="label-text-alt text-red-500">{errors.password}</span>}
                                       </div>
                                    </div>
                                   
                                    <button 
                                       className="btn-orange w-full text-lg rounded-xl"
                                       type='submit'   
                                    >
                                       تایید
                                       <FaCheck/>
                                    </button>
                           </form>
                        )}
                        </Formik>
                        
                    <button className="btn btn-ghost mt-5" onClick={()=>gotourl("/signup")}>
                        حساب کاربری ندارم
                       <span className='text-2xl'>😐</span>
                    </button>
            </div>
                 <div className="hidden md:block bg-orange-500 rounded-e-xl pt-36 ps-32 text-white">
                        <p className="text-5xl">سفری</p>
                 </div>
             </div>
        </div>
       </div>
    </div>
    <div></div>

 </div>
  )
}
