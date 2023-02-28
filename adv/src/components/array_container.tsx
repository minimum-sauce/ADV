import React from "react";

//Properties for the Container componenet
type Props = {
    value:number,
    idx: number,
    style: string
}

/**
 * Renders a React functional component 
 * @param props value: value to be displayed, idx: index for key mapping, 
 * id: individual id for css styling
 * @returns A square container to display values
 */
const Container: React.FC<Props> = (props) => {
    
    return (
        <div className="array-container" key={props.idx} id={props.style}>
            {props.value}
        </div>
    )
};

export default Container; 