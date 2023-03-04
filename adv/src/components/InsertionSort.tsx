import React, { useState, useRef } from "react";
import { insertion_sort_steps, get_frames, type States, State } from "../algorithms/insertion_sort";
import { random_permutation } from "../algorithms/random_permutation";
import ArrayBar from "./ArrayBar";
import Stepper from "./Stepper"
import usePlay from "../hooks/usePlay";


/**
 * 
 * @returns A JSX element with functionality to 
 * generate a random array of input length
 * step through the steps of evaluation generated form passing the array to 
 * the insertion_sort algorithm
 */
const InsertionSort: React.FC = () => {

    const init_state: State = { value: [], current: undefined, reference: undefined };
    const frame_index = useRef(0);

    // state variable to show stepper buttons and a function to update it
    const [show_stepper, set_show_stepper] = useState<boolean>(false)
    // state variable of the array passed to <Array /> and a function to update it
    const [items, set_items] = useState<number[]>([]);
    // state variable of the length of the array to be generated and a function to update it
    const [array_length, set_array_length] = useState<number>(5);
    // state variable of the the frames to step through and a function to update it
    const [frames, set_frames] = useState<States>([init_state]);
    // a hook to acces play state and a function to update it
    const { play, set_play } = usePlay(step_forw);


    // event handeler for input from the html <form /> 
    function handle_submit(event: React.FormEvent<HTMLFormElement>): void {
        set_show_stepper(true)                                  //Show stepper buttons
        frame_index.current = 0;                                //Reset frame_index
        const random_array = random_permutation(array_length)   //Generate random_array
        set_items(random_array);                                //Set the state of items to the array
        insertion_sort_steps([...random_array]);                //Run a copy of the array through the sorting algorithm    
        set_frames(get_frames());                               //Set the state of frames to the recorded frames
        set_play(false);
        event.preventDefault();                                 //Prevent interface reload
    }

    // decrease fame_index and update state of items variable
    function step_back() {
        if (frame_index.current > 1) {
            frame_index.current--;
            const new_frame = frames[frame_index.current].value;
            set_items(new_frame);
        } else { frame_index.current = 1; };

    }

    // increase fame_index and update state of items variable
    function step_forw() {
        if (frame_index.current < frames.length - 1) {
            frame_index.current++;
            const new_frame = frames[frame_index.current].value;
            set_items(new_frame);
        } else { set_play(false) };

    }

    // get index of the "current" element
    function get_current() {
        const curr = frames[frame_index.current].current
        return curr;
    }

    // get index of the "reference" element
    function get_reference() {
        const ref = frames[frame_index.current].reference
        return ref;
    }

    // trigger play hook and set state
    function handle_play() {
        if (frame_index.current === frames.length - 1) {
            frame_index.current = 0;
        }
        set_play(!play)
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
                <Stepper
                    prev={step_back}
                    play={handle_play}
                    next={step_forw}
                    state_play={play}
                />
            </div>
            <div className="array-bar">
                <ArrayBar array={items} current={get_current()} reference={get_reference()} />
            </div>

        </>
    )
};

export default InsertionSort








