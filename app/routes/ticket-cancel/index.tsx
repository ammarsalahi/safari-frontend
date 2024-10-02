import React from 'react'
import NavbarProvider from '~/components/contexts/NavbarProvider'
import CancelTicketForm from '~/components/elements/tickets/CancelTicketForm'

export default function TicketCancel() {
  return (
    <NavbarProvider>
      <CancelTicketForm/>
    </NavbarProvider>
  )
}
