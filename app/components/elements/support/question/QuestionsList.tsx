import React from 'react'
import { FaQuestionCircle } from 'react-icons/fa'

export default function QuestionsList() {
  return (
    <div className='bg-orange-500 h-full p-5 rounded-xl text-white'>
        <div className='flex justify-center items-center gap-3 text-xl text-center font-bold'>
          <FaQuestionCircle fontSize={20}/>
          سوالات متداول</div>
        <ul className="menu menu-vertical pt-4 text-base">
          
            <li>
               <a>سوال اول</a>  
            </li> 
            <li>
               <a>سوال اول</a>  
            </li> 
            <li>
               <a>سوال اول</a>  
            </li> 
            <li>
               <a>سوال اول</a>  
            </li> 
            <li>
               <a>سوال اول</a>  
            </li> 
            <li>
               <a>سوال اول</a>  
            </li> 
            <li>
               <a>سوال اول</a>  
            </li> 
            <li>
               <a>سوال اول</a>  
            </li> 
            <li>
               <a>سوال اول</a>  
            </li> 
           
        </ul>
    </div>
  )
}
