import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hello from Alex, GCP and Kubernetes!
        </h1>
        <p>
          (Using automated pipeline connected to Github).
        </p>
        
      </header>
    </div>
  );
}

export default App;
