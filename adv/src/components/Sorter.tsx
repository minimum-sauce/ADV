import React, {useEffect, useState, useRef} from "react";
import { insertion_sort, get_frames, type States, State } from "../algorithms/insertion_sort";
import { random_permutation } from "../algorithms/random_permutation";
import Array_bar from "./ArrayBar";


interface Props {
    algorithm: string
}

const initState: State = {value: [], current: null, reference: null};

const Sorter: React.FC<Props> = (props) => {
    const frame_index = useRef(0);
    const [show_stepper_buttons, set_show_stepper_buttons] = useState<boolean>(false)
    const [items, set_items] = useState<number[]>([]);
    const [array_length, set_array_length] = useState<number>(0);
    const [frames, set_frames] = useState<States>([initState]) 
    
    

    function generate_new_array(event:React.FormEvent<HTMLFormElement>): void {
        set_show_stepper_buttons(true)                          //Show stepper buttons
        frame_index.current = 0;                                //Reset frame_index
        const random_array = random_permutation(array_length)   //Generate random_array
        set_items(random_array);                                //Set the state of items to the array
        insertion_sort([...random_array]);                      //Run a copy of the array through the sorting algorithm    
        set_frames(get_frames());                               //Set the state of frames to the recorded frames
        event.preventDefault();                                 //Prevent interface reload
    }

    function step_back() {
        if(frame_index.current > 1) {
            frame_index.current --;
            const newFrame = frames[frame_index.current].value;
            set_items(newFrame);
        } else {frame_index.current = 1;};
        
    }

    function step_forw() {
        if(frame_index.current < frames.length - 1) {
            frame_index.current ++;
            const newFrame = frames[frame_index.current].value;
            set_items(newFrame);  
        } else {frame_index.current = frames.length - 1};
        
    }

    function get_current() {
        const curr = frames[frame_index.current].current 
            return curr;
    }

    function get_reference() {
        const ref = frames[frame_index.current].reference
            return ref;
    }


    function play () {
        setInterval(()=>step_forw(), 500)
    }
    
    
    return (
        <>
        <header className='sub-header'>
        <form onSubmit={(e) => (generate_new_array(e))}>
            <label>Number of elements to sort:
              <input
                type="number" 
                value={array_length}
                min="0"
                defaultValue={5}
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
        <div className="array-bar" >
            <Array_bar array={items} current={get_current()} reference={get_reference()}/>
        </div>
        <div style={{ display: show_stepper_buttons ? "block" : "none" }}>
            <button id="button-28" role="button" onClick={step_back}>{"<"}</button>
            <button onClick={play}>Play</button>
            <button id="button-28" role="button" onClick={step_forw}>{">"}</button>
        </div>
        </>
    )
};

export default Sorter








