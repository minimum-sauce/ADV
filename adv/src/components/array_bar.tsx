import React, {useState} from "react";
import { random_permutation } from "../algorithms/random_permutation";
import Container from "./array_container";

type Props = {
    length: number
}

const Array_bar: React.FC<Props> = (props) => {
    const array_init = random_permutation(props.length);
    const [items, setItems] = useState<number[]>(array_init);

    function handleClick() {
        setItems(random_permutation(props.length));
    }
    
    return (
        <div className="array-bar">
            {items.map((value, idx) => (
                <Container value={value} idx={idx}/>
            ))}

            <button onClick={handleClick}>Scramble</button>
        </div>
    )
};





export default Array_bar;