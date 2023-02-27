import React, {useEffect, useState} from "react";
import { random_permutation } from "../algorithms/random_permutation";
import { insertion_sort } from "../algorithms/insertion_sort";
import Array_bar from "./array_bar";

interface Props {
    algo?: (list: number[]) => number[],
    array_init: number[]
    frames?: number[][]
    length?: number
}



const Sorter: React.FC<Props> = (props) => {
    const init = props.array_init;
    
    return (
        <div>
            
        <div className="sorter">
            <Array_bar array={init}/>
            
        </div>
        </div>
    )
};

export default Sorter