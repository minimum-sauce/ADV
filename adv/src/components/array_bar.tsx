import React, {useState} from "react";
import { random_permutation } from "../algorithms/random_permutation";
import Container from "./array_container";

interface Props {
    array: number[]
    idx?: number;
}

const Array_bar: React.FC<Props> = (props) => {

    return (
        <div className="array-bar">
            {props.array.map((value, idx) => (
                <Container value={value} idx={idx} key={idx} />
            ))}
        </div>
    )
};

export default Array_bar;