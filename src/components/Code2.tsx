import  { Component } from 'react';

// Step 1: Define an interface for the component's state
interface CounterState {
  count: number; // The count state is a number
}

// Step 2: Extend the Component class with the props and state types
class Counter extends Component<{}, CounterState> { 
  // Step 3: Initialize the state with the correct type
  state: CounterState = {
    count: 0 // count is initialized as a number
  }; 
  
  // Step 4: Properly type the increment method
  increment = (): void => {
    this.setState({ count: this.state.count + 1 }); // Ensuring count is always a number
  };
  
  // Step 5: Render method remains the same but with type inference
  render() { 
    return (
      <div> 
        <p>Count: {this.state.count}</p> 
        <button onClick={this.increment}>Increment</button> 
      </div>
    );
  }
}

export default Counter;
