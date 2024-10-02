import React from 'react'
import NavbarProvider from '~/components/contexts/NavbarProvider'
import QuestionContent from '~/components/elements/support/question/QuestionContent'
import Questions from '~/components/elements/support/question/Questions'

export default function QuestionsPage() {
  return (
    <NavbarProvider>
       <Questions/>
    </NavbarProvider>
  )
}
