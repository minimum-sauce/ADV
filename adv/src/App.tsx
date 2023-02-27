import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style/array_style.css'
import Array_bar from './components/array_bar'


//Interface for components
//Needs implementation of menu for selection 
function App() {
  return (
    <div className="App">
      <Array_bar />
    </div>
  );
}

export default App; 
