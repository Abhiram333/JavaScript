import React from 'react';
import ReactDOM from 'react-dom';
 
class App extends React.Component {
    state = { input1: '' };
    state = { input2: '' };
    state = { input3: '' };
    state = { output: '' };
    render() {
        return (
            < div >
                Enter values: 
                <input type="text" value=   {this.state.input1} onChange={e1 => this.setState({ input1:e1.target.value })} />
                <input type="text" value=   {this.state.input2} onChange={e2 => this.setState({ input2:e2.target.value })} />
                <input type="text" value=   {this.state.input3} onChange={e3=> this.setState({ input3:e3.target.value })} />
                <label>
                  =
                </label>
                <div>Hi {this.state.input1}{this.state.input3}{this.state.input2}!</div>
            </div >
        );
    }
}
 
ReactDOM.render(<App />, document.getElementById('root'));