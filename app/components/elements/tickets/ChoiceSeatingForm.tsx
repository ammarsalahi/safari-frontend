import React, { useEffect, useState } from 'react'
import { FaAngleLeft } from 'react-icons/fa6'

interface stepprops{
  next:any
}
export default function ChoiceSeatingForm(props:stepprops) {
  let columnList:any=[]
  const getSeating=()=>{
     for(let i=0;i<=30;i++){
         if(i%3==0){
            columnList.push(
              <div className="col-span-2 flex justify-center">
                  <button className="btn-white btn-square text-xl btn-base">{i+1}</button>
              </div>
            )
         }else{
          columnList.push(
            <div>
              <button className="btn-white btn-square text-xl btn-base">{i+1}</button>
            </div>
          )
         }
     }
  }

  useEffect(() => {
      getSeating()
      console.log(columnList)
  }, [])
  
  return (
    <div>
                <p className="text-center text-lg">صندلی(های) موردنظر را انتخاب کنید</p>
                  <div className="pt-5">
                    <div className="rounded-lg bg-base-300 p-5 mb-5">
                         <div className="grid grid-cols-2">
                           <div>
                             <div className="flex gap-4 text-lg items-center mb-5">
                                <button className="btn-white btn-square btn-sm"/>
                                قابل خرید
                             </div>
                             <div className="flex gap-4 text-lg items-center mb-5">
                                <button className="btn btn-primary btn-square btn-sm"/>
                                قابل خرید
                             </div>
                             <div className="flex gap-4 text-lg items-center">
                                <button className="btn btn-secondary btn-square btn-sm"/>
                                قابل خرید
                             </div>
                           </div>
                              <div className="grid grid-cols-4 gap-5 mb-3">
                                 {columnList}
                              </div>
                         </div>
                         
                    </div>

                   <button className="btn-orange w-64 gap-10 text-base" onClick={props.next}>
                    ادامه
                    <FaAngleLeft/>
                  </button>
                  </div>
                </div>
  )
}
