/**
* A record type that is used to store information about a specific point
* in time while running merge_sort. 
*/
export type State = {
    arr: Array<number>,
    current?: number,
    ref?: number
};
export type States = Array<State>;

// Array that is used to store States.
let history: States = [];

/**
 * Function to access all the steps stored in history.
 * @returns - Array with the steps recorded from selection_sort.
 */
export const get_frames = () => {
    return history;
}

/**
 * A function that saves information in a State and pushes it to history.
 * @param arr - Array to be saved.
 * @param current - Index of the element currently looked at.
 * @param ref - Index of the element that is compared to current.
 */
function add_state(arr: Array<number>, current?: number, ref?: number): void {
    history.push({
        arr: arr,
        current: current,
        ref: ref
    });
}

/**
 * Finds the smallest element of part of an array.
 * Provided by the course material and modified.
 * @param arr - Array to be searched.
 * @param min - Low index of the part of the array to be searched.
 * @param max - High index of the part of the array to be searched.
 * @returns - Index of the smallest element in the part that was searched.
 */
export function find_smallest(arr: Array<number>, min: number, max: number): number {
    let smallest: number = min;
    for (let i: number = min + 1; i <= max; i++) {
        add_state([...arr], smallest, i)
        if (arr[i] < arr[smallest]) {
            smallest = i;
        } else { }
    };
    return smallest;
}

/**
 * Swaps places of two elements in an array.
 * Provided by the course material.
 * @param arr - Input array.
 * @param x - Element to be swapped.
 * @param y - Element to be swapped.
 */
function swap<T>(arr: Array<T>, x: number, y: number): void {
    const temp: T = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

/**
 * Sorts an array so that the smallest element is furthest to the left and the biggest to the right.
 * Also stores State from several points in the sorting process.
 * Provided by the course material and modified.
 * @param arr - Array to be sorted.
 */
export function selection_sort(arr: Array<number>): void {
    history = [];
    const len: number = arr.length;
    add_state([...arr]);
    for (let i: number = 0; i < len; i++) {
        add_state([...arr], i);
        let smallest = find_smallest(arr, i, len - 1);
        add_state([...arr], smallest, i);
        swap(arr, i, smallest);
        add_state([...arr], i, smallest);

    };
    add_state([...arr]);
}

