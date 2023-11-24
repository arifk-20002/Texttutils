import { useState } from "react";


export default function Textform(props) {

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    const ClearText = ()=>{
        setText("")
    }

    const handleOnChange = (event)=>{
        console.log("on change")
        setText(event.target.value)
    }

    const handleTitleCaseClick = () => {
        const sentences = text.split('. ');
        let transformedText = '';
      
        for (let i = 0; i < sentences.length; i++) {
          const sentence = sentences[i];
      
          // Title case: Capitalize the first letter
          const titleCaseSentence = sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
      
          
      
          // Append both title-cased and lowercase sentences to the result
          transformedText += titleCaseSentence + '. ';
        }
      
        // Remove the extra space and period at the end
        transformedText = transformedText.trim();
      
        setText(transformedText);
      };
      
      
    const [text, setText] = useState("")

    return (
        <>
            <div className="container">
            <h1>{props.heading}</h1>
            <div class="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary " onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={ClearText}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleTitleCaseClick}>Title Case</button>
            </div>
            <div className="container my-3">
                <h3>Your Text Summary</h3>
                <p>{text.split(" ").length} word and {text.length} character </p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h4>Preview</h4>
                <p>{text}</p>
            </div>
        </>

    )
}




