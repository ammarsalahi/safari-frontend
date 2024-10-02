import React from 'react'
import DashboardNavbar from '../elements/global/DashboardNavbar'
import Sidebar from '../elements/global/Sidebar'

export default function DashboardProvider({children}:{children:React.ReactNode}) {
    return (
      <div className='relative grid grid-cols-3 md:grid-cols-4 '>
          <div>
            <Sidebar/>
          </div>
          <div className="col-span-2 md:col-span-3">
              <DashboardNavbar/>
              <div>
              {children}
              </div>
          </div>
      </div>
    )
}