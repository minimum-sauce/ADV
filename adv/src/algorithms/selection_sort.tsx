import React, { useState } from "react";
import { random_permutation } from "./random_permutation";

type States= Array<State>;
type State = {
    arr: Array<number>,
    current?: number,
    ref?: number
};

let history: States = [];

function add_state(A: Array<number>, current?: number, ref?: number): void {
    history.push({
        arr: A,
        current: current,
        ref: ref
    });
}

function get_id(Current: number, idx: number){
    if(idx === history[Current].current){
        return 'current';
    }else if(idx === history[Current].ref){
        return 'ref'
    }
}

function reset_history(): void {
    history = [];
}

function find_smallest<T>(A: Array<T>, min: number, max: number): number {
    let smallest: number = min;
    for(let i: number = min + 1; i <= max; i ++){
        if(A[i] < A[smallest]){
            smallest = i;
        } else {}
    };
    return smallest;
}

function swap<T>(A: Array<T>, x:number, y: number): void {
    const temp: T = A[x];
    A[x] = A[y];
    A[y] = temp;
}

function selection_sort(A: Array<number>): States {
    reset_history();
    const len: number = A.length;
    add_state([...A]);
    for(let i: number = 0; i < len; i ++){
        add_state([...A], i);
        let smallest = find_smallest(A, i, len - 1);
        add_state([...A], i, smallest);
        swap(A, i, smallest);
        add_state([...A], smallest, i);
        add_state([...A]);
    };
    return history;
}

selection_sort(random_permutation(10));

const Selection_main: React.FC = () => {
    const [Current, setCurrent] = useState(0);
    console.log(Current);
    const scrambleClick = () => {
        selection_sort(random_permutation(10));
        setCurrent(0);
    }
    const unsortClick = () => {
        setCurrent(0);
    }
    const sortClick = () => {
        setCurrent(history.length - 1);
    }
    const nextClick = () => {
      if(Current < history.length - 1){
        setCurrent(Current + 1);
      }else{}
    }
    const backClick = () => {
      if(Current > 0){
        setCurrent(Current - 1);
      }else{}
    }
    return (
        <div>
          <div className='buttons'>
                <button onClick={scrambleClick}>{'Scramble'}</button>
                <button onClick={unsortClick}>{'Unsort'}</button>
                <button onClick={sortClick}>{'Sort'}</button> 
                <button onClick={backClick}>{'<'}</button>
                <button onClick={nextClick}>{'>'}</button>
            </div>
          <div className="array-bar">
            {history[Current].arr.map((val, index) => (
                <div className='array-container' key={index} id={get_id(Current, index)}>
                    {val}
                </div>
            ))}
            </div>
        </div>
    )
}

export default Selection_main;
