import React from 'react';

export const doIncrement = (prevState) => ({
    counter: prevState.counter + 1
})

export const doDecrement = (prevState) => ({
    counter: prevState.counter - 1
})

const App = class extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        };
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
    }
    onIncrement(){
        this.setState(doIncrement);
    }
    onDecrement(){
        this.setState(doDecrement);
    }
    render(){
        const {counter} = this.state;
        return (
            <div>
                <h1>My Counter</h1>
                <Counter counter={counter} />

                <button type="button" onClick={this.onIncrement}>Increment</button>
                <button type="button" onClick={this.onDecrement}>Decrement</button>
            </div>
        )
    }
}

export const Counter = ({counter}) => <p>{counter}</p>

export default App;