import React, { useState } from 'react';
import { SpeedProvider } from './providers/SpeedProvider'
import { IterableMaze } from './components/Maze';
import MergeMain from './components/MergeSort';
import SelectionMain from './components/SelectionSort';
import InsertionSort from './components/InsertionSort';
import SortSpeed from './components/SortSpeed';
import QuickSort from './components/QucikSort';

import './style/App.css';
import './style/array_style.css';
import './style/Maze.css';
import './style/MergeSort.css'

type SortTypes = "insertion_sort" | "selection_sort" | "merge_sort" | "dfs_maze"

export default function App() {

  //A string state variable for chosing what component to load
  const [option, set_option] = useState<SortTypes>()


  /**
   * Switch-case to load a React component of the current state of option
   * @param option: string: a state variable 
   * @returns A React component rendering your selected option 
   */
  function load(option?: SortTypes) {

    switch (option) {
      case "insertion_sort": {
        return (
          <InsertionSort />
        )
      }
      case "merge_sort": {
        return (
          <MergeMain />
        )
      }
      case "selection_sort": {
        return (
          <SelectionMain />
        )
      }
      case "dfs_maze": {
        return (
          <IterableMaze />
        )
      }

      default: {
        return (
          <h1>Welcome to ADV</h1>
        )
      }
    }
  }

  return (
    <SpeedProvider>
      <main>
        <header className='header'>
          <button onClick={() => { set_option("insertion_sort") }}>Insertion sort</button>
          <button onClick={() => { set_option("merge_sort") }}>Merge sort</button>
          <button onClick={() => { set_option("selection_sort") }}>Selection sort</button>
          <button onClick={() => { set_option("dfs_maze") }}>DFS Maze</button>
        </header>
        <div className="App">
          {load(option)}
        </div>
        <div>
          {option && <SortSpeed max={500} min={10} step={50} />}
        </div>
      </main>
    </SpeedProvider>

  );
}

