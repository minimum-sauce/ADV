import React, { useState } from "react";
import { random_permutation } from "./random_permutation";

type States= Array<State>;
type State = {
    arr: Array<number>,
    current?: number,
    ref?: number
};


function add_state(history: States, arr: Array<number>, current?: number, ref?: number): void {
    history.push({
        arr: arr,
        current: current,
        ref: ref
    });
}

function find_smallest<T>(arr: Array<T>, min: number, max: number): number {
    let smallest: number = min;
    for(let i: number = min + 1; i <= max; i ++){
        if(arr[i] < arr[smallest]){
            smallest = i;
        } else {}
    };
    return smallest;
}

function swap<T>(arr: Array<T>, x:number, y: number): void {
    const temp: T = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

export function selection_sort(history: States, arr: Array<number>): void {
    const len: number = arr.length;
    add_state(history, [...arr]);
    for(let i: number = 0; i < len; i ++){
        add_state(history, [...arr], i);
        let smallest = find_smallest(arr, i, len - 1);
        add_state(history, [...arr], i, smallest);
        swap(arr, i, smallest);
        add_state(history, [...arr], smallest, i);
        add_state(history, [...arr]);
    };
}

