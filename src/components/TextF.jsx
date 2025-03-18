import React, { useState } from "react";

export default function TextF(props) {
  const handleUpClick = () => {
    //arrow function
    //console.log("Uppercase was clicked:" + text); //existing text+new entered text in console
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    //arrow function
    //console.log("Lowercase was clicked:" + text); //existing text+new entered text in console
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    //arrow function
    //console.log("Cleartext was clicked:" + text); //existing text+new entered text in console
    let newText = "";
    setText(newText);
    //dont want to take let then
    //setText("");
  };
  const handleInverseClick = () => {
    //arrow function
    //console.log("Inversetext was clicked:" + text); //existing text+new entered text in console
    let newText = "";
    for (let i = text.length - 1; i >= 0; i--) {
      newText += text[i];
    }
    setText(newText);
  };

  const handleOnChange = (event) => {
    //arrow function
    //console.log("On change");
    setText(event.target.value);
  };
  // const [text, setText] = useState('Enter text here');
  const [text, setText] = useState("");
  //text = "new text"; //wrong way to change the state
  //setText = "new text"; //correct way to change the state
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="12"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleInverseClick}>
          Inverse Text
        </button>
      </div>
      <div className="container my-3">
        <h2>your text summary</h2>
        {/* {text.split(" ").length} words & {text.length} characters */}
        <p>
          {text.split(/\s+/).filter((value) => value !== "").length} words and{" "}
          {text.trim().length} characters
        </p>
        {/* considering 125 words can be read at 1 min */}
        <p>
          {0.008 * text.split(/\s+/).filter((value) => value !== "").length}{" "}
          minutes read
        </p>
        {/*for preview the text*/}
        <h2>preview</h2>
        {text}
      </div>
    </>
  );
}
