import React, { useState } from 'react'

const DisplayArea = ({question, answer}) => {
    const [show, setShow] = useState(false);

    const toggleShow = ()=>{
        setShow(!show)
    }
  return (
    <div className='main-container' onClick={toggleShow}>
      <div className="question-container">
        <div className="question">{question}</div>
        <div className={`answer-container ${show ? "active" : ""}`}>
            <div className="answer">{answer}</div>
        </div>
      </div>
    </div>
  )
}

export default DisplayArea
