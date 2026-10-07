import logo from './logo.svg';
import image from "./images/luffy.webp"
import React, { useState } from 'react';

import './App.css';

function App() {
  let greetingStyle = {"color":"green"};
  let greeting = "Hello";
  const [count, setCount] = useState(0);
  
  const handleClickenc = () => {
    setCount(count + 1);
  }
  const handleClickdecr = () => {
    setCount(count - 1);
  }
  return (
    <>
    <div>
    <h1 style={{color:"red"}}>Hello World</h1>
    <h1 style={greetingStyle}>{greeting}</h1>
    <h1 className="greetingStyles">{greeting}</h1>
    <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  <img src={image}/>

    </div>
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClickenc}>Increment</button>
      <button onClick={handleClickdecr}>decriment</button>
    </div>
    </>
  );
  
}

export default App;
