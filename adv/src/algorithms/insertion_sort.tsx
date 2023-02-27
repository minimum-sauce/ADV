type Focus = number | null;
export type States = Array<State>;
type State = {
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

export function insertion_sort(list: number[]): number[] {
    reset_frames();
    let current:Focus = null;
    let ref:Focus = null;
    save_frame([...list], current, ref);
    
    
    IndexIterator:
    for (let i = 1; i < list.length; i++) {
        const valueToSort = list[i];
        current = i;
        save_frame([...list], current, ref)
        InsertionIterator:
        for (let j = i - 1; j >= 0; j--) {
            ref = j;
            save_frame([...list], current, ref)
            if (valueToSort >= list[j]) {
                list[j + 1] = valueToSort;
                ref = null;
                save_frame([...list], current, ref)
                continue IndexIterator;
            } else {
                list[j + 1] = list[j];
                list[j] = valueToSort;
                ref = null;
                save_frame([...list], current, ref)
                current = current - 1;
                
                continue InsertionIterator;
            }
        }
    }
    return list;
    
};

