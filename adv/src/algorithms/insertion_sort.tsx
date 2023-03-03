

type Focus = number | undefined;
export type States = Array<State>;

// A record type to save significant values when executing insertion_sort
export type State = {
    value: number[],
    current: Focus,
    reference: Focus
}
/* representation: {
        current state of the array, 
        points to index of current value, 
        points to index of reference value
    }
*/


// Initiating variable to save steps
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

/**
 * Executes the insertion_sort algorithm and records the steps of evaluation
 * @param list Array: Array to run  through the algoritm
 */

export function insertion_sort_steps(list: number[]): void {

    // Function to push the current state to the steps variable
    function save_frame(A: number[], current: Focus, ref: Focus): void {
        steps.push(
            {
                value:A,
                current: current,
                reference: ref
            }
        )
    }

    // Set initial state of current
    let current:Focus = undefined;
    // Set initial state of reference
    let ref:Focus = undefined;

    // Facilitates when saving a step 
    const save = () => save_frame([...list], current, ref)

    function insertion_sort(list: number[]): void {
        reset_frames();     //Reset steps
        save();            
        IndexIterator:
        for (let i = 1; i < list.length; i++) {
            const valueToSort = list[i];
            current = i
            ref = undefined;
            save();
            InsertionIterator:
            for (let j = i - 1; j >= 0; j--) {
                ref = j;
                save();
                if (valueToSort >= list[j]) {
                    list[j + 1] = valueToSort;
                    ref = undefined;
                    current = undefined;
                    continue IndexIterator;
                } else {
                    list[j + 1] = list[j];
                    list[j] = valueToSort;
                    ref = current;
                    current = current - 1;
                    save();
                    continue InsertionIterator;
                }
            }
        }
        current = undefined;
        ref = undefined;
        save();
    };

    insertion_sort(list);
}
