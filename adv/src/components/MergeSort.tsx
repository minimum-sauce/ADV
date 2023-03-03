import React, { useState, useEffect, useRef } from 'react';
import { merge_sort } from '../algorithms/merge_sort'
import { random_permutation } from '../algorithms/random_permutation';
import Stepper from './Stepper'

type States = Array<State>;
type State = {
  bottom_arr: Array<number>,
  top_arr: Array<number>,
  colour?: number
}


function get_id(history: States, history_idx: number, idx: number) {
  if (idx === history[history_idx].colour) {
    return 'current';
  } else { }
}


var history: States = [];

var random_array = random_permutation(6);
merge_sort(random_array, history);

const MergeMain: React.FC = () => {

  // state variale to track state of play button and a function to update it 
  const [play, set_play] = useState(false)
  const timer = useRef<NodeJS.Timer>();
  // play function to iterate over frames with 500ms delay
  function handle_play() {
    set_play(!play)
  }
  //Reset Interval if play is active else initiate
  useEffect(() => {
    if (play) {
      timer.current = setInterval(() => next_click(), 500)
    }
    return () => {
      clearInterval(timer.current)
    }

  }, [play]);

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
    if (history_idx < history.length - 1) {
      set_history_idx((x) => x + 1);

    } else { }
  }

  const back_click = () => {
    if (history_idx > 0) {
      set_history_idx(history_idx - 1);
    } else { }
  }



  return (
    <div>
      <div className='buttons'>
        <button onClick={scramble_click}>{'Scramble'}</button>
        <button onClick={unsort_click}>{'Unsort'}</button>
        <button onClick={sort_click}>{'Sort'}</button>
        <Stepper prev={back_click} play={handle_play} next={next_click} />
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