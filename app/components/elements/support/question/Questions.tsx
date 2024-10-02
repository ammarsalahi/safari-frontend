import React from 'react'
import QuestionsList from './QuestionsList'
import QuestionContent from './QuestionContent'
import QuestionForm from './QuestionForm'
import TreeView from '../../global/TreeView'
import { CiSearch } from 'react-icons/ci'
import { FaQuestion } from 'react-icons/fa6'
import { AiOutlineClose } from "react-icons/ai";
import { useUrlDirector } from '../../global/UrlNavigator'
import { FaHeart } from "react-icons/fa6";

export default function Questions() {
  const gotourl =useUrlDirector()

  const openModal = (): void => {
    const modal: HTMLDialogElement | null = document.getElementById('q_form') as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };
  return (
    <div>
        <div className="px-5 lg:px-16">
          <div className="flex justify-center gap-7">
              <label className="search-input input-sm w-full lg:w-[500px] mb-5">
                  <CiSearch/>
                  <input type="text" className="grow" placeholder="جستجوی سوالات" />
              </label>
            <button className='btn-orange p-4' onClick={openModal}>
              <FaQuestion/>
              پرسیدن
            </button>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2'>
              <div className="chat chat-start flex justify-center mb-4">
                  <div 
                    className="chat-bubble bg-orange-500 text-white p-4 cursor-pointer w-full"
                    onClick={()=>gotourl("/questions/1234")}>
                      To be on the Council at your age.
                  </div>
                </div>
              
          </div>
           
       
        
        </div>
          <dialog id="q_form" className="modal">
              <div className="modal-box">
               <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  <AiOutlineClose fontSize={20}/>
                </button>
              </form>
                <QuestionForm/>
              </div>
               {/* <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>  */}
          </dialog>
    </div>
  )
}
