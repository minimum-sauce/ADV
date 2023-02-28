import React, {useEffect, useState} from "react";
import { insertion_sort, get_frames } from "../algorithms/insertion_sort";
import { random_permutation } from "../algorithms/random_permutation";
import Array_bar from "./array_bar";

interface Props {
    algorithm: string
}





const initState = {value: [], current: null, ref: null};

let frame_index = 0;
var frames = [initState];
const Sorter: React.FC<Props> = (props) => {

    const [items, set_items] = useState<number[]>([]);
    const [length, set_length] = useState<number>(0);

    function generate_array(event:React.FormEvent<HTMLFormElement>): void {
        event.preventDefault()
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

    function get_id(idx:number): string {
        const curr = frames[frame_index].current
        const ref = frames[frame_index].ref
        if(idx === curr && curr !== null) {
            return "current"
        } else if(idx === ref && ref !== null) {
            return "ref"
        } else {
            return "normal"
        }
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
            <button onClick={stepBack}>Back</button>
            <button onClick={stepForw}>Next</button>
            <Array_bar array={items} />
        </div>
        </>
    )
};

export default Sorter








