import React from 'react'
import Navbar from '../elements/global/Navbar'

export default function NavbarProvider({children}:{children:React.ReactNode}) {
  return (
    <div>
        <Navbar/>
        <div className='container-md'>
            {children}
        </div>
    </div>
  )
}
