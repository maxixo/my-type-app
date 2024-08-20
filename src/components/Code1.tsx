import React from 'react';

// Step 1: Define a Props interface to specify the expected type of props
interface GreetingProps {
  name: string; // The name prop is expected to be a string
}

// Step 2: Annotate the props with the defined interface
const Greeting: React.FC<GreetingProps> = ({ name }) => { 
  // Step 3: Return the JSX element with the prop typed correctly
  return <div>Hello, {name}!</div>;
};

export default Greeting;
