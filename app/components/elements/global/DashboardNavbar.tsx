import React, { useEffect, useState } from 'react'
import { AiFillMoon, AiFillSun } from 'react-icons/ai'
import { CiSearch } from 'react-icons/ci'
import { FaEdit, FaTrashAlt,FaUserLock } from 'react-icons/fa'
import { IoMdLogOut } from 'react-icons/io'
import { FaAngleDown, FaUser } from "react-icons/fa6";
import { useUrlDirector } from './UrlNavigator'
import { useRecoilState, useRecoilValue } from 'recoil'
import { TokenSelector, UserSelector } from '~/components/states/selectors'
import { Api } from '~/components/api'
import { USER, USER_DETAILS } from '~/components/api/endpoints'
import { AuthConfigHeader } from '~/components/api/headerConfig'


export default function DashboardNavbar() {
  const [userdata,setUserdata]=useRecoilState(UserSelector)
  const [theme, setTheme] = useState(userdata.theme);
  const token=useRecoilValue(TokenSelector)
  const gotourl=useUrlDirector();

  const handleTheme=()=>{
    let data={}
    if(theme=='light'){
       setTheme('dark')
       data={theme:"dark"}
    }else{
       setTheme('light')
        data={theme:"dark"}
    }
    Api.patch(USER,data,{headers:AuthConfigHeader(token)}).then((res)=>{
        setUserdata({...userdata,theme:res.data.theme})
    }).catch((err)=>{
      console.log(err)
    })
  }

  const get_user=()=>{
    if(token!=="" && userdata.fullname==""){
       Api.get(USER_DETAILS,{headers:AuthConfigHeader(token)}).then((res)=>{
            setUserdata({
              fullname:res.data.full_name,
              color:res.data.color,
              theme:res.data.theme
            })
            setTheme(res.data.theme)
       })//.catch((err)=>{
          // console.log(err);
          // console.log(token)
       //})
    }
  }
  useEffect(() => {
    get_user()
    document.documentElement.setAttribute('data-theme',theme)
  }, [token,theme])
  

  return (
    <div className='navbar px-7 shadow-md'>
        <div className="navbar-start">
            <label className="input input-bordered input-warning input-sm flex rounded-full items-center gap-2 w-full">
                <CiSearch/>
                <input type="text" className="grow" placeholder="جستجو" />
            </label>
        </div>
        <div className="navbar-end">
           <div className="flex gap-5">
             <button className="btn btn-ghost btn-circle btn-sm" onClick={handleTheme}>
                {theme=="light"?<AiFillSun fontSize={20}/>:<AiFillMoon fontSize={20}/>}
             </button>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-sm ">
                <FaUser/>
                {userdata.fullname}
                 <FaAngleDown/>
              </div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                 <li><a className="flex gap-5" onClick={()=>gotourl("/dashboard/user-edit")}>
                    <FaEdit/>
                     ویرایش
                </a></li>
                <li><a className="flex gap-5" onClick={()=>gotourl("/dashboard/password-change")}>
                    <FaUserLock/>
                     تغیرر گذرواژه
                </a></li>
                  <li><a className="flex gap-5"  onClick={()=>gotourl("/dashboard/user-delete")}>
                    <FaTrashAlt/>
                     حذف
                </a></li>
                  <li><a className="flex gap-5">
                    <IoMdLogOut/>
                     خروج
                </a></li>
              </ul>
            </div>
            </div>
        </div>
    </div>
  )
}

