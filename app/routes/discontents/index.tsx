import React from 'react'
import NavbarProvider from '~/components/contexts/NavbarProvider'
import DiscontentSteps from '~/components/elements/support/discontent/DiscontentSteps'

export default function DiscontentsPage() {
  return (
    <NavbarProvider>
       <div className="flex justify-center">
          <DiscontentSteps/>
       </div>
     </NavbarProvider>
  )
}
