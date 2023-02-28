import React, {useEffect, useState} from "react";
import { insertion_sort, get_frames, type States, State } from "../algorithms/insertion_sort";
import { random_permutation } from "../algorithms/random_permutation";
import Array_bar from "./array_bar";


interface Props {
    algorithm: string
}

const initState: State = {value: [], current: null, reference: null};

let frame_index = 0;

const Sorter: React.FC<Props> = (props) => {

    const [items, set_items] = useState<number[]>([]);
    const [length, set_length] = useState<number>(0);
    const [frames, set_frames] = useState<States>([initState]) 
    
    function stepper() {
        set_frames(insertion_sort([...items]));
    }

    function generate_array(event:React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        set_items(random_permutation(length));
    }

    function stepBack() {
        if(frame_index > 1) {
            frame_index --;
            const newFrame = frames[frame_index].value;
            set_items(newFrame);
        } else {frame_index = 1;};
        
    };

    function stepForw() {
        if(frame_index < frames.length) {
            frame_index ++;
            const newFrame = frames[frame_index].value;
            set_items(newFrame);  
        } else {frame_index = frames.length};
        
    }

    function get_current() {
        const curr = frames[frame_index].current 
            return curr;
    }

    function get_reference() {
        const ref = frames[frame_index].reference
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
        <div className="array-bar">
            <Array_bar array={items} current={get_current()} reference={get_reference()}/>
        </div>
            <button onClick={stepBack}>Back</button>
            <button onClick={stepper}>Start</button>
            <button onClick={stepForw}>Next</button>
        </>
    )
};

export default Sorter








