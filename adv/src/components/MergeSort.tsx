import React, { useState, useRef } from 'react';
import { merge_sort } from '../algorithms/merge_sort'
import { random_permutation } from '../algorithms/random_permutation';
import usePlay from '../hooks/usePlay';
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
  const history_idx = useRef(0);
  const [items, set_items] = useState<State>(history[history_idx.current]);



  const scramble_click = () => {
    history = [];
    random_array = random_permutation(6);
    merge_sort(random_array, history);
    history_idx.current = 0;
    set_items(history[history_idx.current])
  }

  const unsort_click = () => {
    history_idx.current = 0;
    set_items(history[history_idx.current])
  }

  const sort_click = () => {
    history_idx.current = history.length - 1;
    set_items(history[history_idx.current])
  }

  const next_click = () => {
    if (history_idx.current < history.length - 1) {
      history_idx.current++;
      set_items(history[history_idx.current])
    } else { set_play(false) }
  }

  const back_click = () => {
    if (history_idx.current > 0) {
      history_idx.current--;
      set_items(history[history_idx.current])
    } else { }
  }

  const { play, set_play } = usePlay(next_click);

  function handle_play() {
    if (history_idx.current === history.length - 1) {
      history_idx.current = 0;
    }
    set_play(!play)
  }


  return (
    <div className='App'>
      <div className='buttons'>
        <button onClick={scramble_click}>{'Scramble'}</button>
        <button onClick={unsort_click}>{'Unsort'}</button>
        <button onClick={sort_click}>{'Sort'}</button>
      </div>
      <Stepper prev={back_click} play={handle_play} next={next_click} state_play={play} />
      <div>Original array</div>
      <div className='array-bar'>
        {history[history_idx.current].top_arr.map((val, index) => (
          <div className='array-container' key={index} id={get_id(history, history_idx.current, index)}>
            {val}
          </div>
        ))}
      </div>
      <div className='array-bar'>
        {history[history_idx.current].bottom_arr.map((val1, idx1) => (
          <div className='array-container' key={idx1}>
            {val1}
          </div>
        ))}
      </div>
    </div>

  )
};

export default MergeMain;