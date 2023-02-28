import React, {useEffect, useState, useRef} from "react";
import { insertion_sort, get_frames, type States, State } from "../algorithms/insertion_sort";
import { random_permutation } from "../algorithms/random_permutation";
import Array_bar from "./array_bar";


interface Props {
    algorithm: string
}

const initState: State = {value: [], current: null, reference: null};



const Sorter: React.FC<Props> = (props) => {
    const frame_index = useRef(0);
    const [show_stepper, set_show] = useState<boolean>(false)
    const [items, set_items] = useState<number[]>([]);
    const [length, set_length] = useState<number>(0);
    const [frames, set_frames] = useState<States>([initState]) 
    
    

    function generate_array(event:React.FormEvent<HTMLFormElement>): void {
        set_show(true)
        frame_index.current = 0;
        const random_array = random_permutation(length)
        set_items(random_array);
        set_frames(insertion_sort([...random_array]));
        event.preventDefault();
    }

    function stepBack() {
        if(frame_index.current > 1) {
            frame_index.current --;
            const newFrame = frames[frame_index.current].value;
            set_items(newFrame);
        } else {frame_index.current = 1;};
        
    };

    function stepForw() {
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
    
    return (
        <>
        <header className='sub-header'>
        <form onSubmit={(e) => (generate_array(e))}>
            <label>Number of elements:
              <input
                type="number" 
                value={length}
                min="0"

                onChange={(e) => (set_length(+e.target.value))}
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
        <div style={{ display: show_stepper ? "block" : "none" }}>
            <button id="button-28" role="button" onClick={stepBack}>{"<"}</button>
            <button id="button-28" role="button" onClick={stepForw}>{">"}</button>
        </div>
        </>
    )
};

export default Sorter








