import React from 'react'
import QuestionsList from './QuestionsList'
import QuestionContent from './QuestionContent'

export default function QuestionDetail() {
  return (
    <div>
        <div className="grid grid-cols-4 gap-5 pt-5">
            <div>
                <QuestionsList/>
            </div>
            <div className="col-span-3">
                <QuestionContent/>
            </div>
        </div>
    </div>
  )
}
