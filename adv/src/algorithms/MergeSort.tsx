import React, { useState } from 'react';
import { random_permutation } from './random_permutation';
import  '../style/MergeSort.css'

type States = Array<State>;
type State = {
  arr_left: number[],
  arr_right: number[],
  position: string,
  
}


const randomArray: number[] = random_permutation(6);
let History: States = [];

function save_state(A_left: number[], A_right: number[], position: string): void{
  History.push(
    {
      arr_left: A_left,
      arr_right: A_right,
      position: position,
    }
  );
}

function reset_history() {
  History = [];
}

function get_position(Current: number) {
    return History[Current].position;
}



export function merge_sort(A: Array<number>): States {
  reset_history();
  save_state([...A], [], 'centre');
  function merge_sort_helper(A: Array<number>, low: number, high: number): void {
    if (low < high) {
      const mid: number = Math.floor((low + high) / 2);
      const A_left = A.slice(low, mid);
      const A_right = A.slice(mid+1, high);
      if(A_left.length > 0) { 
        save_state(A_left, [], 'left');
      }
      merge_sort_helper(A, low, mid);
      save_state([A[mid + 1]], [], 'centre')
      if(A_right.length > 0) {
        save_state([], A_right, 'right');
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
      B_index += 1
    }
    while (left <= mid) {
        B[B_index] = A[left];
        B_index += 1;
        left += 1;
    }
    while (right <= high) {
        B[B_index] = A[right];
        B_index += 1;
        right += 1;
    }
    for (let k = 0; k < high - low + 1; k += 1) {
        A[low + k] = B[k];
    }
    save_state([...B], [], 'centre');
  }
  merge_sort_helper(A, 0, A.length - 1);
  return History;
};

merge_sort(randomArray);


const Merge_Main: React.FC = () => {
  const [Current, setCurrent] = useState(0);
  console.log(Current);
  
  const scrambleClick = () => {
    setCurrent(0);
  }
  const sortClick = () => {
    setCurrent(History.length - 1);
  }
  const nextClick = () => {
    if(Current < History.length - 1){
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
            <button onClick={sortClick}>{'Sort'}</button> 
            <button onClick={backClick}>{'<'}</button>
            <button onClick={nextClick}>{'>'}</button>
        </div>
      <div className='vertical'>
        {History.map((His_arr, His_idx) => (
          <div className='tree'>
            <div className='array-bar' key={His_idx} id={get_position(His_idx)}>
              {History[His_idx].arr_left.map((val1, idx1) => (
                <div className='array-container' key={idx1}>
                  {val1}
                </div>
               ))}
            </div>
            <div className='array-bar' key={His_idx} id={get_position(His_idx)}>
              {History[His_idx].arr_right.map((val2, idx2) => (
                <div className='array-container' key={idx2}>
                  {val2}
                </div>
              ))}
            </div>
            <div id='clear'></div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Merge_Main;