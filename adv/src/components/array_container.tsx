
//Properties for the Container componenet
type Props = {
    value:number,
    idx: number
}

/**
 * Renders a React functional component 
 * @param props {value: value to be displayed, idx: index for key mapping}
 * @returns a react component  
 */
const Container: React.FC<Props> = (props) => {
    
    return (
        <div className="array-container" key={props.idx}>
            {props.value}
        </div>
    )
};

export default Container;