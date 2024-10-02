import { createContext, useContext, useEffect, useState } from "react";
import React from 'react'
import { useRecoilState } from "recoil";
import { TokenSelector } from "../states/selectors";
import { useNavigate } from "@remix-run/react";
import Navbar from "../elements/global/Navbar";


const UserContext=createContext<any>(null)


export const UserProvider=({children}:{children:React.ReactNode})=>{
    const navigate=useNavigate()

    const [userToken, setUserToken] = useRecoilState(TokenSelector);

    const signin=(tokendata:string)=>{
        setUserToken(tokendata)
    }
    const signout=()=>{
        setUserToken("")
    }
    useEffect(() => {
      if(userToken==""){
          navigate("/signin")
      }
    }, [userToken])
    

  return (
    <UserContext.Provider value={{userToken, signin, signout}}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser=()=>useContext(UserContext)
