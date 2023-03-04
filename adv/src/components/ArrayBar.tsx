import React from "react";
import Container from "./Container";

// Properties for the array bar component
interface Props {
    array: number[]
    current?: number;
    reference?: number;
}

/**
 * Renders a Container for each element in an array passing down value and id to sub component
 * @param props 
 * array: array to be displayed, 
 * current: index of the element to be passed id="current"
 * reference: index of the element to be passed id="reference"
 * @returns A React functional component of Containers given a value and a id
 */
const ArrayBar: React.FC<Props> = ({ array, current, reference }) => {

    //Sets the id for each Container component
    function get_id(idx: number): string {
        if (idx === current) {
            return "current"
        } else if (idx === reference) {
            return "ref"
        } else {
            return "normal"
        }
    }

    return (
        <div data-testid="array-bar" className="array-bar">
            {array.map((value, idx) => (
                <Container value={value} idx={idx} focus={get_id(idx)} key={idx} />
            ))}
        </div>
    )
};

export default ArrayBar;