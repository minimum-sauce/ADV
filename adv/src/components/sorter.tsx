import React, {useState} from "react";
import { random_permutation } from "../algorithms/random_permutation";
import Array_bar from "./array_bar";

interface Props {
    algo?: () => void
    frames?: number[][]
    length: number
}

const n = 10;
const A = [0,1,2,3,4,5];
const B = [0,1,2];
const C = [3,4,5];
const D = [A, B, C];

const Sorter: React.FC<Props> = (props) => {
    const array_init = random_permutation(props.length);
    const [items, setItems] = useState<number[]>(array_init);

    function handleClick() {
        setItems(random_permutation(props.length));
    }
    
    return (
        <div className="sorter">
            {D.map((value) => (
                <Array_bar array={value}/>
            ))}
            
            <button onClick={handleClick}>Scramble</button>
        </div>
    )
};

export default Sorter