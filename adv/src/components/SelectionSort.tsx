import React, { useState } from "react";
import { random_permutation } from "../algorithms/random_permutation";
import { selection_sort, get_id } from '../algorithms/selection_sort'

type States= Array<State>;
type State = {
    arr: Array<number>,
    current?: number,
    ref?: number
};

let history: States = [];

let random_array = random_permutation(10);
selection_sort(history, random_array);

const SelectionMain: React.FC = () => {
    const [history_idx, set_history_idx] = useState(0);
    const scramble_click = () => {
        history = [];
        random_array = random_permutation(10);
        selection_sort(history, random_array);
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
          <div className="array-bar">
            {history[history_idx].arr.map((val, index) => (
                <div className='array-container' key={index} id={get_id(history, history_idx, index)}>
                    {val}
                </div>
            ))}
            </div>
        </div>
    )
}

export default SelectionMain