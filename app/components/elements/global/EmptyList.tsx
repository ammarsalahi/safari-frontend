import React from 'react'
import Lottie from 'react-lottie-player'
import emptyJson from '../../../assets/lotties/search-orange-empty.json'

interface emptyProps{
  emptyname:string
}
export default function EmptyList(props:emptyProps) {
  return (
    <div className="flex justify-center">
      <div className='px-5 py-16'>
        <Lottie animationData={emptyJson} loop play style={{height:300,width:300}}/>
        <p className="text-center text-xl font-bold">هیچ {props.emptyname} پیدا نشد!!!</p>
      </div>
    </div>
    
  )
}
