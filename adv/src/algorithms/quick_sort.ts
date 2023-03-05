import { FC } from "react";

type Focus = number | undefined;
export type States = Array<State>;


// A record type to save significant values when executing insertion_sort
export type State = {
    arr: number[],
    left_arr: number[],
    right_arr: number[],
    pivot: number[],
    depth: number,
    current: Focus,
    reference: Focus,
}
/* representation: {
        current state of the array, 
        points to index of current value, 
        points to index of reference value
    }
*/

// Initiating variable to save stepsd
let steps: States = []


/**
 * Function to get the current recorded steps of the insertion_sort algorithm
 * @returns The current state of the steps variable
 */
export const get_frames = () => {
    return steps;
}

/**
 * Function to reset the steps variable
 */
const reset_frames = () => {
    steps = [];
}



export function quick_sort_steps(list: number[]): void {

    // Function to push the current state to the steps variable
    function save_frame(arr: number[] = [], left: number[] = [], right: number[] = [], pivot: number[], depth: number, current?: Focus, ref?: Focus): void {
        steps.push(
            {
                arr: [...arr],
                left_arr: [...left],
                right_arr: [...right],
                pivot: pivot,
                depth: depth,
                current: current,
                reference: ref,

            }
        )
    }

    // Set initial state of current
    let current: Focus = undefined;
    // Set initial state of reference
    let ref: Focus = undefined;
    let depth = 0;
    function qs(arr: number[]): number[] {
        depth++;
        if (arr.length <= 1) {
            return arr;
        }
        const pivot = arr[0];
        const left: number[] = [];
        const right: number[] = [];
        save_frame(arr, left, right, [pivot], depth);
        for (let i = 1; i < arr.length; i++) {
            save_frame(arr, left, right, [pivot], depth);
            if (arr[i] < pivot) {
                left.push(arr[i])
                save_frame(arr, left, right, [pivot], depth);
            } else {
                right.push(arr[i])
                save_frame(arr, left, right, [pivot], depth);
            }
        }
        return [...qs(left), pivot, ...qs(right)]
    }
    reset_frames();
    qs(list)
}

