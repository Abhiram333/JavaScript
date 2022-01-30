import React, { useState } from 'react';
import ReactDOM from 'react-dom';

 
export default function App() {
    const [input1, setInput1] = useState("")
    const [input2, setInput2] = useState("")
    const [input3, setInput3] = useState("")
    const [output, setOutput] = useState("")

  

 
     function onSubmit(){

    if (input2.includes("+")){
       
           setOutput (Number(input1) + Number(input3))
   }

   else if (input2.includes("*","x")){
     
    setOutput (Number(input1) * Number(input3))
     
 }

 else if (input2.includes("/")){
   
  setOutput (Number(input1) / Number(input3))
   
}

else if (input2.includes("-")){
 
  setOutput (Number(input1) - Number(input3))
 

}


  
     
 }

 



        return (
            <div>
                <h1>Simple Calculator</h1>
                <input type="button" onClick={onSubmit} value="Calculate" />
                Enter values: 
                <input type="text" value=   {input1} onChange={e1 => setInput1(e1.target.value )} />
                <input type="text" value=   {input2} onChange={e2 => setInput2(e2.target.value )} />
                <input type="text" value=   {input3} onChange={e3=> setInput3(e3.target.value )} />
                <label>
                  = 
                </label>
                <div>{output}</div>
            </div>
        );
        }
        
 
ReactDOM.render(<App />, document.getElementById('root'));
