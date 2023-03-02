import React, {useState} from 'react';
import Sorter from './components/Sorter'
import { IterableMaze } from './components/Maze';

import './style/App.css';
import './style/array_style.css';
import './style/Maze.css';
import Merge_Main from './algorithms/MergeSort';
import Selection_main from './algorithms/selection_sort';


export default function App() {

  //A string state variable for chosing what component to load
  const [option, set_option] = useState<string>("")

  /**
   * Switch-case to load a React component of the current state of option
   * @param option: string: a state variable 
   * @returns A React component rendering your selected option 
   */
  function load(option: string) {
    switch(option) { 
      case "insertion_sort": { 
        return (
          <div className='App' id="sorter">
            <Sorter algorithm={option}/>
          </div>
        )    
      }
      case "merge_sort": { 
        return (
          <div className='App' id="sorter">
            <Merge_Main />
          </div>
        )    
      }
      case "selection_sort": { 
        return (
          <div className='App' id="sorter">
            <Selection_main />
          </div>
        )    
      }
      case "incremental_sort": { 
        //Insert incremental_sort
        return (
          <div className='App' id="sorter">
            
          </div>
        )    
      }
      case "dfs_maze": { 
        return (
          <div className='App' id="sorter">
            <IterableMaze />
          </div>
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
    <main>
      <header className='header'>
          <button onClick={()=> {set_option("insertion_sort")}}>Insertion sort</button>
          <button onClick={()=> {set_option("merge_sort")}}>Merge sort</button>
          <button onClick={()=> {set_option("selection_sort")}}>Selection sort</button>
          <button onClick={()=> {set_option("dfs_maze")}}>DFS Maze</button>
        </header>
          <div className="App">
              {load(option)}
          </div>
    </main>
    
  );
}

