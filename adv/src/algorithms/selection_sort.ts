type States = Array<State>;
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

function find_smallest(history: States, arr: Array<number>, min: number, max: number): number {
    let smallest: number = min;
    for (let i: number = min + 1; i <= max; i++) {
        add_state(history, [...arr], smallest, i)
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

export function selection_sort(history: States, arr: Array<number>): void {
    const len: number = arr.length;
    add_state(history, [...arr]);
    for (let i: number = 0; i < len; i++) {
        add_state(history, [...arr], i);
        let smallest = find_smallest(history, arr, i, len - 1);
        add_state(history, [...arr], smallest, i);
        swap(arr, i, smallest);
        add_state(history, [...arr], i, smallest);

    };
    add_state(history, [...arr]);
}

