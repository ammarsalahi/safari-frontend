import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaPlus } from 'react-icons/fa6'
import CardForm from './CardForm'
import { AiOutlineClose } from 'react-icons/ai'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'

export default function CardsList() {
    const openModal = (): void => {
        const modal: HTMLDialogElement | null = document.getElementById('card_form') as HTMLDialogElement;
        if (modal) {
          modal.showModal();
        }
    };
  return (
    <div>
        <div className='card-light'>
        <div className="card-body">
            <p className='text-2xl text-center font-bold mb-10'>کارت‌های بانکی</p>
            <div className="flex justify-between items-center mb-8">
                <label className="search-input w-full md:w-[450px]">
                    <CiSearch/>
                    <input type="text" className="grow" placeholder="جستجو" />
                </label>
                <button className='btn-orange gap-3' onClick={openModal}>
                    افزودن
                    <FaPlus/>
                </button>
            </div>
        
            <div className="overflow-x-auto">
                <ul>
                    <li className="border-b hover:bg-base-300  cursor-pointer hover:rounded-md">
                        <div className="flex justify-between items-center p-5">
                            <p>نام بانک</p>
                            <p>شماره کارت</p>
                            <button className='btn btn-ghost mx-2 btn-circle text-blue-500 text-lg' onClick={openModal}>
                              <FaEdit/>
                            </button>
                            <button className='btn btn-ghost btn-circle text-red-500 text-lg'>
                              <FaTrashAlt />
                            </button>
                        </div>
                    </li> 
                </ul>
            </div> 

            <div className="items-center flex justify-center pt-5">
            <div className="join">
                <input
                    className="join-item btn btn-square"
                    type="radio"
                    name="options"
                    aria-label="1"
                    defaultChecked />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
                </div>
            </div>

        </div>
        </div>
        <dialog id="card_form" className="modal">
              <div className="modal-box">
               <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  <AiOutlineClose fontSize={20}/>
                </button>
              </form>
                <CardForm/>
              </div>
               {/* <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>  */}
          </dialog>
    </div>
 
  )
}
