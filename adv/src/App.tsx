import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style/array_style.css'
import Sorter from './components/sorter'


//Interface for components
//Needs implementation of menu for selection 



function App() {
  return (
    <div className="App">
        <Sorter length={10}/> 
    </div>
  );
}

export default App; 
