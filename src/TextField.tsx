import react, { useRef, useState } from 'react';

interface Person {
    fname: string;
    lname: string;
}

interface Props {
    text: string;
    ok?: boolean;
    i?: number;
    fn?: (bob: string) => string;
    person: Person;
    handleChange: react.ChangeEventHandler<HTMLInputElement>;
}

interface TextNode {
    text: string;
}

export const TextField: React.FC<Props> = ({handleChange}) => {
    const [count, setCount] = useState<TextNode>({ text: "hello" });
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null)


    return (
        <div ref={divRef}> 
            <label form='input'> input: </label>
            <input type="text" ref={inputRef} onChange={handleChange} id='input'/>
        </div>
    );
}


