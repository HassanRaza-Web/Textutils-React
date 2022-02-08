import React, { useState } from 'react'

export default function TextForm(props) {
    // TO UPPERCASE
    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Uppercase', 'success')
    }
    const handleOnChange = (event) => {
        console.log("onChange");
        setText(event.target.value)
    }
    // TO LOWERCASE
    const handleLoClick = () => {
        console.log('handleLoClick was clicked');
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lowercase', 'success')
    }
    // Clear Text
    const clearText = () => {
        setText("");
        props.showAlert('Cleared', 'success')
    }
    // Copy Text
    const handleCopy = () => {
        let textarea = document.getElementById('mybox');
        textarea.select();
        navigator.clipboard.writeText(textarea.value);
        props.showAlert('Text Coppied', 'success')
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3 my-3">
                    <textarea className="form-control"
                    style={{backgroundColor: props.mode ==='dark'?'gray':'white', color: props.mode ==='dark'?'white':'dark'}}
                    onChange={handleOnChange} value={text} id='mybox' rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary" onClick={clearText}>Clear Text</button>
                <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
            </div>
            <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>

    )
}
