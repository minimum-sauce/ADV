import React from 'react';
import './App.css';
import './style/array_style.css'
import Sorter from './components/sorter'
import { insertion_sort } from './algorithms/insertion_sort';
import { random_permutation } from './algorithms/random_permutation';
import { useState } from 'react';

//Interface for components
//Needs implementation of menu for selection 
const alg = insertion_sort;     //Should be input from user
const n = 10;                   //Should be inpout from user





function App() {
  const [items, setItems] = useState<number[]>([]);
  const [length, setLength] = useState(0);


  const generate_array = () => {
    setItems(random_permutation(length));
  }

  return (
    <div>
    <header className='header'>
    <form onSubmit={generate_array}>
        <label>Number of elements:
          <input
            type="number" 
            value={length}
            onChange={(e) => (setLength(+e.target.value))}
          />
        </label>
      </form>
      <button onClick={generate_array}>Generate</button>
    </header>
    <div className="App">
        <Sorter algo={alg} array_init={items} length={n}/> 
    </div>
    </div>
  );
}

export default App; 
