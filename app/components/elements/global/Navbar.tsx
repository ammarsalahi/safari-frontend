import React, { useEffect, useState } from 'react'
import { FaBusAlt,FaTrain,FaTaxi,FaQuestionCircle,FaComment,FaBook} from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";
import { MdQueryStats,MdCancel } from "react-icons/md";
import { GoLaw } from "react-icons/go";
import { AiFillAppstore, AiFillMoon, AiFillSun } from "react-icons/ai";
import { useUrlDirector } from './UrlNavigator';
import { FaAngleDown, FaUser } from "react-icons/fa6";
import lightlogo from '~/assets/newlogo-light.png'
import { useRecoilState, useRecoilValue } from 'recoil';
import { IoMdLogOut } from 'react-icons/io';
import { TokenSelector, UserSelector } from '~/components/states/selectors';
import { AuthConfigHeader } from '~/components/api/headerConfig';
import { USER, USER_DETAILS } from '~/components/api/endpoints';
import { Api } from '~/components/api';
import { Link } from '@remix-run/react';


export default function Navbar() {
  const [theme, setTheme] = useState("light");
  const gotourl=useUrlDirector();
  const token=useRecoilValue(TokenSelector)
  const [userdata,setUserdata]=useRecoilState(UserSelector)

  
  const handleTheme=()=>{
    if(theme=='light'){
       setTheme('dark')
    }else{
       setTheme('light')
    }
    Api.patch(USER,{theme:theme},{headers:AuthConfigHeader(token)}).then((res)=>{
      setTheme(res.data.theme)
    }).catch((err)=>{
      console.log(err)
    })
  }

  const get_user=()=>{
    console.log(token)
    if(token!=="" && userdata.fullname==""){
       Api.get(USER_DETAILS,{headers:AuthConfigHeader(token)}).then((res)=>{
            setUserdata({
              fullname:res.data.full_name,
              color:res.data.color,
              theme:res.data.theme
            })
            setTheme(res.data.theme)
       }).catch((err)=>{
          console.log(err);
          console.log(token)
       })
    }
  }
 
  useEffect(() => {
    get_user()
    
    document.documentElement.setAttribute('data-theme',theme)
  }, [theme,token])



  return (
    <div className="navbar bg-orange-500 text-white fixed top-0 shadow-xl px-5 py-0" style={{'zIndex':1}}>
    <div className="navbar-start">
        <Link to={'/'}>
          <img src={lightlogo} className='w-[100px]'/>
        </Link>
    </div>
    <div className="navbar-center hidden lg:block">
      <div className="flex justify-between items-center gap-7">
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="btn btn-sm btn-ghost flex">
                  خدمات سفر
                 <FaAngleDown/>
              </div>
              <ul tabIndex={0} className="dropdown-content bg-orange-500 menu rounded-box rounded-t-none w-52 px-2 py-5 shadow">
                  <li>
                    <a>
                      <FaBusAlt fontSize={23}/>
                      بلیط اتوبوس
                    </a>
                  </li>
                  <li>
                    <a>
                      <FaTrain fontSize={23}/>
                      بلیط قطار
                    </a>
                  </li>
                  <li>
                    <a>
                      <FaTaxi fontSize={23}/>
                      بلیط سواری
                    </a>
                  </li>
                  <li>
                    <a>
                      <IoAirplane fontSize={23}/>
                      بلیط هواپیما
                    </a>
                  </li>
              </ul>
            </div>
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="btn btn-sm btn-ghost flex">
                 پیگیری بلیط
                 <FaAngleDown/>
              </div>
              <ul tabIndex={0} className="dropdown-content bg-orange-500 menu rounded-box rounded-t-none w-52 px-2 py-5 shadow">
                 <li>
                    <a onClick={()=>gotourl('/ticket-search')}>
                      <MdQueryStats fontSize={23}/>
                      استعلام بلیط
                    </a>
                  </li>
                  <li>
                    <a onClick={()=>gotourl('/ticket-cancel')}>
                      <MdCancel fontSize={23}/>
                      لغو بلیط
                    </a>
                  </li>
              </ul>
            </div>

            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="btn btn-sm btn-ghost flex">
                  پشتیبانی
                 <FaAngleDown/>
              </div>
              <ul tabIndex={0} className="dropdown-content bg-orange-500 menu  rounded-box rounded-t-none w-52 px-2 py-7 shadow">
                  <li>
                    <Link to={'/questions'}>
                      <FaQuestionCircle fontSize={23}/>
                      پرسش‌های‌ و پاسخ‌ها
                    </Link>
                  </li>
                  <li>
                    <Link to={'/comments'}>
                      <FaComment fontSize={23}/>
                      نظرات و پیشنهادات
                    </Link>
                  </li>
                  <li>
                    <Link to={'/discontents'}>
                      <GoLaw fontSize={26}/>
                      شکایات
                    </Link>
                  </li>
                  <li>
                    <Link to={'/roles'}>
                      <FaBook fontSize={23}/>
                      شرایط و مقررات
                    </Link>
                  </li>
              </ul>
            </div>
      </div>

    </div>
    <div className="navbar-end">
        {/* <button className='btn btn-ghost btn-sm text-lg mx-2'>
          Fa
       </button> */}
       <button className="btn btn-ghost btn-circle btn-sm  mx-2" onClick={handleTheme}>
          {theme=="light"?<AiFillSun fontSize={20}/>:<AiFillMoon fontSize={20}/>}
        </button>
        {token!==""&&userdata.fullname!==""?
          <div className="dropdown dropdown-hover dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-sm btn-ghost flex">
                    <FaUser/>
                    {userdata.fullname}
                  <FaAngleDown/>
              </div>
              <ul tabIndex={0} className="dropdown-content bg-orange-500 menu  font-semibold  rounded-box rounded-t-none w-52 px-2 py-5 shadow">
                  <li>
                    <Link to={'/dashboard'}>
                      <AiFillAppstore fontSize={27}/>
                       داشبورد
                    </Link>
                  </li>
                  <li>
                    <a>
                      <IoMdLogOut fontSize={27}/>
                       خروج
                    </a>
                  </li>
              </ul>
          </div>  
         :
          <button 
            className='btn btn-ghost btn-sm pb-1' 
            onClick={()=>gotourl('/signin')}  
          >
            ورود
          </button>
         }
       
    </div>
    </div>
  )
}
