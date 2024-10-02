import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import CommentForm from './CommentForm'

export default function CommentDetail() {
	const openModal = (): void => {
		const modal: HTMLDialogElement | null = document.getElementById('reply_model') as HTMLDialogElement;
		if (modal) {
		  modal.showModal();
		}
	};
  return (
       <div>
        <div className="card-light">
            <div className="card-body">
             	<p className='text-xl font-bold mb-10'>ایمیل</p>
           	 <div className="rounded-xl p-10 bg-base-200 mb-5">
                	<p>jkfdmsllllllllllllmsdfdkjfdf</p>
                	 <p>jkfdmsllllllllllllmsdfdkjfdf</p>
                	<p>jkfdmsllllllllllllmsdfdkjfdf</p>
                	<p>jkfdmsllllllllllllmsdfdkjfdf</p>
                	<p>jkfdmsllllllllllllmsdfdkjfdf</p>
                	<p>jkfdmsllllllllllllmsdfdkjfdf</p>
                	<p>jkfdmsllllllllllllmsdfdkjfdf</p>
                </div>
             	<div className="card-actions justify-end">
			      <button className="btn-orange" onClick={openModal}>پاسخ دادن</button>
			    </div>
            </div>
        </div>
		<dialog id="reply_model" className="modal">
              <div className="modal-box">
               <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  <AiOutlineClose fontSize={20}/>
                </button>
              </form>
                <CommentForm/>
              </div>
               {/* <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>  */}
          </dialog>
    </div>
  )
}
