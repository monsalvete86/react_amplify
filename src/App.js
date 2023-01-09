import logo from './logo.svg';
import './App.css';
import testFunc from './services/test.service'
import React, { useState, useEffect } from "react";


function App() {

  const [test, setTest] = useState();

  useEffect(() => { retriveTest()});
  
  const retriveTest = () => {
    testFunc.testFunction()
    .then((res) => {
      setTest(res.data)
      console.log(res.data)
      console.log(test)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p></p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
