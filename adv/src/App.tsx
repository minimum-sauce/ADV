import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style/array_style.css'
import Array_bar from './components/array_bar'


//Interface for components
//Needs implementation of menu for selection 

const n = 10;
function App() {
  return (
    <div className="App">
      <Array_bar length={n}/> 
    </div>
  );
}

export default App; 
