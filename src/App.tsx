import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MonacoEditor } from './MonacoEditor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MonacoEditor/>
      </header>
    </div>
  );
}

export default App;
