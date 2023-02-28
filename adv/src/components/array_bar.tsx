import React, {useState} from "react";
import { random_permutation } from "../algorithms/random_permutation";
import Container from "./array_container";

interface Props {
    array: number[]
    current: number | null;
    reference: number | null;
}

const Array_bar: React.FC<Props> = (props) => {
    
    function get_id(idx:number): string {
        if(idx === props.current) {
            return "current"
        } else if(idx === props.reference) {
            return "ref"
        } else {
            return "normal"
        }
    }

    return (
        <div className="array-bar">
            {props.array.map((value, idx) => (
                <Container value={value} idx={idx} style={get_id(idx)} key={idx} />
            ))}
        </div>
    )
};

export default Array_bar;