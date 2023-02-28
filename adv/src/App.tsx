import React from 'react';
//import Sorter from './components/sorter'
import { insertion_sort } from './algorithms/insertion_sort';
import { random_permutation } from './algorithms/random_permutation';
//import Array_bar from './components/array_bar';
import { MazeMain } from './components/Maze';

import './style/App.css';
import './style/array_style.css';
import './style/Maze.css';


export default function App() {
  return (
    <div className="App">
        <MazeMain />
    </div>
  );
}

