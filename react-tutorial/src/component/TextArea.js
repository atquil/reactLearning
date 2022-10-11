import React from 'react'
import { useState } from 'react'

export default function TextArea() {

    const [text,setText] = useState('');

    const textToUpperCase = () => {
        let upperCaseValue = text.toUpperCase();
        setText(upperCaseValue);
    }
    const textOnChange = (event)=>{
        setText(event.target.value);
    }
  return (
    <>
       <h1>State Change</h1>
        <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Your Story</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"  onChange={textOnChange}></textarea>
        </div>
        <p> Output text: {text}</p>
        <button type="button" className="btn btn-primary" onClick={textToUpperCase}>Make Upper Case</button>
    </>
  )
}
