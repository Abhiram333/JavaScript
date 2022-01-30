import React from 'react';
import ReactDOM from 'react-dom';
import { Fraction, toTex } from 'algebra.js';
import { Node, Context } from 'react-mathjax';

 
export default class App extends React.Component {
    constructor(){
      super();

      this.state = {
        input1: '', input2: '', input3: '', output: '' 
      }
  }
 
   onSubmit(){

    if (this.state.input2.includes("+")){
       this.setState({
           output: (Number(this.state.input1) + Number(this.state.input3))
       })
   }

   else if (this.state.input2.includes("*","x")){
     this.setState({
         output: (Number(this.state.input1) * Number(this.state.input3))
     })
 }

 else if (this.state.input2.includes("/")){
   this.setState({
       output: (Number(this.state.input1) / Number(this.state.input3))
   })
}

else if (this.state.input2.includes("-")){
 this.setState({
     output: (Number(this.state.input1) - Number(this.state.input3))
 })

}


  
     
 }
    render(){


        return (
            <div>
                <h1>Simple Calculator</h1>
                <input type="button" onClick={this.onSubmit.bind(this)} value="Calculate" />
                Enter values: 
                <input type="text" value=   {this.state.input1} onChange={e1 => this.setState({ input1:e1.target.value })} />
                <input type="text" value=   {this.state.input2} onChange={e2 => this.setState({ input2:e2.target.value })} />
                <input type="text" value=   {this.state.input3} onChange={e3=> this.setState({ input3:e3.target.value })} />
                <label>
                  = 
                </label>
                <div>{this.state.output}</div>
            </div>
        );
    }
}
 
ReactDOM.render(<App />, document.getElementById('root'));