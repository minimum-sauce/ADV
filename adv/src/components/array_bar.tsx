import React, {useState, useEffect} from "react";
import { random_permutation } from "../algorithms/random_permutation";

//Array for testing
const A = random_permutation(10);

const Array_bar: React.FC = () => {
    const [items, setItems] = useState<number[]>(A);
    

    function handleClick() {
        setItems([1,2,3,4]);
    }
    
    return (
        <div className="array-bar">
            {items.map((value, idx) => (
                <div className="array-container" key={idx}>
                    {value}
                </div>
            ))}
            <button onClick={handleClick}>Sort</button>
        </div>
    )
};

export default Array_bar;