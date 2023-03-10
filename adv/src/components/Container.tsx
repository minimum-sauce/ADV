import React from "react";
import '../style/array_style.css'

//Properties for the Container componenet
export interface Props {
    value: number,
    idx?: number,
    focus?: string
}

/**
 * Renders a square container with the properties of props
 * @param props 
 * value: value to be displayed, 
 * idx: index for key mapping, 
 * id: individual id for css styling
 * @returns A React functional component displaying value and css-style of given id 
 */
const Container: React.FC<Props> = ({ value, idx, focus }) => {

    return (
        <div data-testid="container" className="array-container" key={idx} id={focus}>
            {value}
        </div>
    )
};

export default Container; 