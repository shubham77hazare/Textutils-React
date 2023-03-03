import React ,{useState} from "react";

export default function TextForm(props) {
    const[text,setText]=useState('');
    //text -> "new text"; wrong way to change the state 
    //setText("new text"); correct way to change the state

    const handleUpClick = () => {
        let upText = text.toUpperCase();
        setText(upText);
        props.showAlert("Coverted to uppercase" ,"success")
    };

    const handleDnClick = () => {
        let dnText = text.toLowerCase();
        setText(dnText);
        props.showAlert("Coverted to lowercase" ,"success")
    };

    const handleclearClick = () => {
        let cnText = '';
        setText(cnText);
        props.showAlert("Text clear" ,"success")
    };
    
    
    const handleCopy= () =>{
      let text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard" ,"success")
    };

    const handleExtraSpace = () => {
        let newText = text.split(/[ ] +/)
        setText(newText.join(" "));
        props.showAlert("Extra space between words removed" ,"success")
        
    };

    const handleOnChange = (event) =>{
      setText(event.target.value);
    };

    
  
  return (
    <>
        <div className="container" style = 
        {{color : props.mode === 'dark' ? 'white' : 'black'}}>
        <h5>{props.heading}</h5>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style = 
        {{backgroundColor : props.mode ==='dark'? 'grey' : 'white',color : props.mode === 'light' ? 'black' : 'white'}} id="myBox" rows="5"></textarea>
        {/* value={text} --> is used to perform the functions */}
        {/* onChange={handleOnChange}--> is used so that we can type the text in textarea using event*/}
      </div >
      <button className="btn btn-primary mx-1"  onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleDnClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleclearClick}>Clear text</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove extra space</button>
      
     
    </div>

    <div className="container my-3" style = 
        {{color : props.mode === 'dark' ? 'white' : 'black'}}>
        <h5>Your text summary</h5>
        <p>{text.split(" ").length} word {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} estimate time required to read the text</p> 
        <h5>Preview</h5>
        <p>{text.length > 0 ? text : "Enter text here to preview"}</p>
    </div>
    </>
    
  );
}
