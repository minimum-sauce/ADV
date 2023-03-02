
type Focus = number | null;

export type States = Array<State>;

export type State = {
    value: number[],
    current: Focus,
    reference: Focus
}

let steps: States = []

function save_frame(A: number[], current: Focus, ref: Focus): void {
    steps.push(
        {
            value:A,
            current: current,
            reference: ref
        }
    )
}
const reset_frames = () => {
    steps = [];
}

export const get_frames = () => {
    return steps;
}

export function insertion_sort(list: number[]): States {
    reset_frames();
    let current:Focus = null;
    let ref:Focus = null;
    const save = () => save_frame([...list], current, ref)
    save();
    
    IndexIterator:
    for (let i = 1; i < list.length; i++) {
        const valueToSort = list[i];
        current = i
        ref = null;
        save();
        InsertionIterator:
        for (let j = i - 1; j >= 0; j--) {
            ref = j;
            save();
            if (valueToSort >= list[j]) {
                list[j + 1] = valueToSort;
                ref = null;
                current = null;
                save();
                continue IndexIterator;
            } else {
                list[j + 1] = list[j];
                list[j] = valueToSort;
                save();
                ref = null;
                current = current - 1;
                save();
                continue InsertionIterator;
            }
        }
    }
    current = null;
    ref = null;
    save();
    return steps;
    
};

