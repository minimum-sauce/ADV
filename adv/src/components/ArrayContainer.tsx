import React from "react";

//Properties for the Container componenet
type Props = {
    value:number,
    idx: number,
    focus: string
}

/**
 * Renders a square container with the properties of props
 * @param props 
 * value: value to be displayed, 
 * idx: index for key mapping, 
 * id: individual id for css styling
 * @returns A React functional component displaying value and css-style of given id 
 */
const Container: React.FC<Props> = (props) => {
    
    return (
        <div className="array-container" key={props.idx} id={props.focus}>
            {props.value}
        </div>
    )
};

export default Container; 