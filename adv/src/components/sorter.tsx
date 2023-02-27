import React, {useState} from "react";
import { random_permutation } from "../algorithms/random_permutation";
import { insertion_sort } from "../algorithms/insertion_sort";
import Array_bar from "./array_bar";

interface Props {
    algo: (list: number[]) => number[],
    array_init: number[]
    frames?: number[][]
    length: number
}

const n = 10;
const A = [0,1,2,3,4,5];
const B = [0,1,2];
const C = [3,4,5];
const D = [A, B, C];

const Sorter: React.FC<Props> = (props) => {
    const init = props.array_init
    const [items, setItems] = useState<number[]>(init);

    
    
    function sort() {
        setItems(props.algo(init));
    }
    
    return (
        <div className="sorter">
            <Array_bar array={init}/>
            <button onClick={sort}>{"<"}</button>
            <button onClick={sort}>{">"}</button>
        </div>
    )
};

export default Sorter