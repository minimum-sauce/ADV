import React, { useState, useRef } from 'react';
import { merge_sort, States, State } from '../algorithms/merge_sort'
import { random_permutation } from '../algorithms/random_permutation';
import usePlay from '../hooks/usePlay';
import ArrayBar from './ArrayBar';
import Stepper from './Stepper'

// Array that is used to store States.
var history: States = [];
// Random array to be sorted.
var random_array = random_permutation(6);
merge_sort(random_array, history);

/**
 * Renders the array and buttons that allow the user to step through the stored States in order to
 * visualize the different steps in the sorting algorithm.
 * @returns - A JSX element that handles the rendering and produces input buttons.
 */
const MergeMain: React.FC = () => {
  const history_idx = useRef(0);
  const [items, set_items] = useState<State>(history[history_idx.current]);


  const scramble_click = () => {
    history = [];
    random_array = random_permutation(6);
    merge_sort(random_array, history);
    history_idx.current = 0;
    set_items(history[history_idx.current]);
  }

  const unsort_click = () => {
    history_idx.current = 0;
    set_items(history[history_idx.current]);
  }

  const sort_click = () => {
    history_idx.current = history.length - 1;
    set_items(history[history_idx.current]);
  }

  const next_click = () => {
    if (history_idx.current < history.length - 1) {
      history_idx.current++;
      set_items(history[history_idx.current]);
    } else { set_play(false) }
  }

  const back_click = () => {
    if (history_idx.current > 0) {
      history_idx.current--;
      set_items(history[history_idx.current]);
    } else { }
  }

  const { play, set_play } = usePlay(next_click);

  function handle_play() {
    if (history_idx.current === history.length - 1) {
      history_idx.current = 0;
    }
    set_play(!play);
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
      <ArrayBar array={items.top_arr} current={items.colour} />
      <ArrayBar array={items.bottom_arr} />
    </div>
  )
};

export default MergeMain;