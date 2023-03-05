type States = Array<State>;
type State = {
    arr: Array<number>,
    current?: number,
    ref?: number
};

let history: States = [];

export const get_frames = () => {
    return history;
}

function add_state(arr: Array<number>, current?: number, ref?: number): void {
    history.push({
        arr: arr,
        current: current,
        ref: ref
    });
}

function find_smallest(arr: Array<number>, min: number, max: number): number {
    let smallest: number = min;
    for (let i: number = min + 1; i <= max; i++) {
        add_state([...arr], smallest, i)
        if (arr[i] < arr[smallest]) {
            smallest = i;
        } else { }
    };
    return smallest;
}

function swap<T>(arr: Array<T>, x: number, y: number): void {
    const temp: T = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

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

