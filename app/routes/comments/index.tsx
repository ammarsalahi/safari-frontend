import React from 'react'
import NavbarProvider from '~/components/contexts/NavbarProvider'
import Comments from '~/components/elements/support/commnet/Comments'

export default function CommentsPage() {
  return (
    <NavbarProvider>
        <Comments/>
    </NavbarProvider>
    
  )
}
