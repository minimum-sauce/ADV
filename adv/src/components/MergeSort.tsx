import React, { useState } from 'react';
import { merge_sort, get_id } from '../algorithms/merge_sort'
import { random_permutation } from '../algorithms/random_permutation';

type States = Array<State>;
type State = {
  bottom_arr: Array<number>,
  top_arr: Array<number>,
  colour?: number 
}


var history: States = [];

var random_array = random_permutation(6);
merge_sort(random_array, history);

const MergeMain: React.FC = () => {
    const [history_idx, set_history_idx] = useState(0);
    const scramble_click = () => {
      history = [];
      random_array = random_permutation(6);
      merge_sort(random_array, history);
      set_history_idx(0);
    }
    const unsort_click = () => {
      set_history_idx(0);
    }
    const sort_click = () => {
      set_history_idx(history.length - 1);
    }
    const next_click = () => {
      if(history_idx < history.length - 1){
        set_history_idx(history_idx + 1);
      }else{}
    }
    const back_click = () => {
      if(history_idx > 0){
        set_history_idx(history_idx - 1);
      }else{}
    }
    return (
      <div>
        <div className='buttons'>
              <button onClick={scramble_click}>{'Scramble'}</button>
              <button onClick={unsort_click}>{'Unsort'}</button>
              <button onClick={sort_click}>{'Sort'}</button> 
              <button onClick={back_click}>{'<'}</button>
              <button onClick={next_click}>{'>'}</button>
          </div>
        <div>
          <div>Original array</div>
          <div className='array-bar'>
            {history[history_idx].top_arr.map((val, index) => (
              <div className='array-container' key={index} id={get_id(history, history_idx, index)}>
                {val}
              </div>
            ))}
          </div>
          <div className='array-bar'>
            {history[history_idx].bottom_arr.map((val1, idx1) => (
              <div className='array-container' key={idx1}>
                {val1}
              </div>
             ))}
          </div>
        </div>
      </div>
    )
  };
  
  export default MergeMain;