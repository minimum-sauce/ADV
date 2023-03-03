import React, { useState } from 'react';
import { random_permutation } from './random_permutation';
import  '../style/MergeSort.css'

type States = Array<State>;
type State = {
  bottom_arr: number[],
  top_arr: number[],
  colour?: number 
}


let history: States = [];

function save_state(bottom: number[], top: number[], colour?: number): void{
  history.push({
    bottom_arr: bottom,
    top_arr: top,
    colour: colour, 
  });
}


function reset_history() {
  history = [];
}


function get_id(Current: number, idx: number) {
  if(idx === history[Current].colour){
      return 'current';
  } else {}
}


export function merge_sort(A: Array<number>): void {
  reset_history();
  save_state([], [...A]);
  function merge_sort_helper(A: Array<number>, low: number, high: number): void {
    if (low < high) {
      const mid: number = Math.floor((low + high) / 2);
      const A_left = A.slice(low, mid + 1);
      const A_right = A.slice(mid + 1, high + 1);
      if(A_left.length > 0) { 
        save_state(A_left, [...A], low);
        //split_at([mid]);
      }
      merge_sort_helper(A, low, mid);
      if(A_right.length > 0) {
        save_state(A_right, [...A], mid + 1);
      }
      merge_sort_helper(A, mid + 1, high);
      merge(A, low, mid, high);
    } else {}
  }
  function merge(A: Array<number>, low: number, mid: number, high: number): void {
    const B: Array<number> = [];
    let left: number = low;
    let right: number = mid + 1;
    let B_index: number = 0;
    while (left <= mid && right <= high) {
      if (A[left] <= A[right]) {
        B[B_index] = A[left];
        left += 1;
      } else {
        B[B_index] = A[right];
        right += 1;
      }
      save_state([...B], [...A], low);
      B_index += 1;
    }
    while (left <= mid) {
      B[B_index] = A[left];
      save_state([...B], [...A], low);
      B_index += 1;
      left += 1;
    }
    while (right <= high) {
      B[B_index] = A[right];
      save_state([...B], [...A], low);
      B_index += 1;
      right += 1;
    }
    for (let k = 0; k < high - low + 1; k += 1) {
      save_state([...B], [...A], low + k);
      A[low + k] = B[k];
      save_state([...B], [...A], low + k);
    }
    save_state([...B], [...A]);
  }
  merge_sort_helper(A, 0, A.length - 1);
  save_state([], [...A]);
};

let random_array: number[] = random_permutation(6);
merge_sort(random_array);

const Merge_Main: React.FC = () => {
  const [Current, setCurrent] = useState(0);
  console.log(Current);
  const scrambleClick = () => {
    random_array = random_permutation(6);
    merge_sort(random_array);
    setCurrent(0);
  }
  const unsortClick = () => {
    setCurrent(0);
  }
  const sortClick = () => {
    setCurrent(history.length - 1);
  }
  const nextClick = () => {
    if(Current < history.length - 1){
      setCurrent(Current + 1);
    }else{}
  }
  const backClick = () => {
    if(Current > 0){
      setCurrent(Current - 1);
    }else{}
  }
  return (
    <div>
      <div className='buttons'>
            <button onClick={scrambleClick}>{'Scramble'}</button>
            <button onClick={unsortClick}>{'Unsort'}</button>
            <button onClick={sortClick}>{'Sort'}</button> 
            <button onClick={backClick}>{'<'}</button>
            <button onClick={nextClick}>{'>'}</button>
        </div>
      <div>
        <div>Original array</div>
        <div className='array-bar'>
          {history[Current].top_arr.map((val, index) => (
            <div className='array-container' key={index} id={get_id(Current, index)}>
              {val}
            </div>
          ))}
        </div>
        <div className='array-bar'>
          {history[Current].bottom_arr.map((val1, idx1) => (
            <div className='array-container' key={idx1}>
              {val1}
            </div>
           ))}
        </div>
      </div>
    </div>
  )
};

export default Merge_Main;