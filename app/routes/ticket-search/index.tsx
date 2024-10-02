import React from 'react'
import NavbarProvider from '~/components/contexts/NavbarProvider'
import SearchList from '~/components/elements/tickets/SearchList'

export default function TikcetSearch() {
  return (
    <NavbarProvider>
        <SearchList/>
    </NavbarProvider>
  )
}
