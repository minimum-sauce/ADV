import React, { useState, useRef } from "react";
import { random_permutation } from "../algorithms/random_permutation";
import { get_frames, selection_sort, State, States } from '../algorithms/selection_sort'
import usePlay from '../hooks/usePlay'
import ArrayBar from "./ArrayBar";
import Stepper from "./Stepper";

/**
 * Renders the array and buttons that allow the user to step through the stored States in order to
 * visualize the different steps in the sorting algorithm.
 * @returns - A JSX element that handles the rendering and produces input buttons.
 */
const SelectionMain: React.FC = () => {
    const init_state: State = { arr: [] }
    // Index that points to the current frame in frames
    const frame_idx = useRef(0);
    // state variable of the array passed to <Array /> and a function to update it
    const [items, set_items] = useState<Array<number>>([]);
    // state variable of the frames to step through and a function to update it
    const [frames, set_frames] = useState<States>([init_state]);
    // state variable to show stepper buttons and a function to update it
    const [show_stepper, set_show_stepper] = useState<boolean>(false)
    // state variable of the length of the array to be generated and a function to update it
    const [array_length, set_array_length] = useState<number>(5);


    // event handeler for input from the html <form /> 
    function handle_submit(event: React.FormEvent<HTMLFormElement>): void {
        set_show_stepper(true)                                  // Show stepper buttons
        frame_idx.current = 0;                                  // Reset frame_index
        const random_array = random_permutation(array_length)   // Generate random_array
        set_items(random_array);                                // Set the state of items to the array
        selection_sort([...random_array]);                      // Run a copy of the array through the sorting algorithm    
        set_frames(get_frames());                               // Set the state of frames to the recorded frames
        set_play(false);                                        // Initial value of play state
        event.preventDefault();                                 //Prevent interface reload
    }
    // Sets frame_idx to the first frame and updates state of items variable.
    const unsort_click = () => {
        frame_idx.current = 0;
        const new_frame = frames[frame_idx.current].arr;
        set_items(new_frame);
    }
    // Sets frame_idx to the last frame and updates state of items variable.
    const sort_click = () => {
        frame_idx.current = frames.length - 1;
        const new_frame = frames[frame_idx.current].arr;
        set_items(new_frame);
    }
    // Increases frame_idx by 1 and updates state of items variable.
    const next_click = () => {
        if (frame_idx.current < frames.length - 1) {
            frame_idx.current++;
            const new_frame = frames[frame_idx.current].arr;
            set_items(new_frame);
        } else { set_play(false) }
    }
    // Decreases frame_idx by 1 and updates state of items variable.
    const back_click = () => {
        if (frame_idx.current > 0) {
            frame_idx.current--;
            const new_frame = frames[frame_idx.current].arr;
            set_items(new_frame);
        } else { }
    }

    // get index of the "current" element
    function get_current() {
        const curr = frames[frame_idx.current].current
        return curr;
    }

    // get index of the "reference" element
    function get_reference() {
        const ref = frames[frame_idx.current].ref
        return ref;
    }
    
    // a hook to acces play state and a function to update it
    const { play, set_play } = usePlay(next_click);
    
    // trigger play hook and set state
    function handle_play() {
        if (frame_idx.current === frames.length - 1) {
            frame_idx.current = 0;
        }
        set_play(!play);
    }

    return (
        <>
            <header className='sub-header'>
                <form onSubmit={(e) => (handle_submit(e))}>
                    <label>Number of elements to sort:
                        <input
                            type="number"
                            value={array_length}
                            min="0"
                            onChange={(e) => (set_array_length(+e.target.value))}
                        />
                    </label>
                    <input
                        type="submit"
                        value="Generate"
                        className="btn btn-dark btn-block"
                    />
                </form>
            </header>
            <div style={{ display: show_stepper ? "block" : "none" }}>
                <div className='buttons'>
                    <button onClick={unsort_click}>{'Unsort'}</button>
                    <button onClick={sort_click}>{'Sort'}</button>
                </div>
                <Stepper prev={back_click} play={handle_play} next={next_click} state_play={play} />
            </div>
            <div className="array-bar">
                <ArrayBar array={items} current={get_current()} reference={get_reference()} />
            </div>
        </>
    )
};

export default SelectionMain