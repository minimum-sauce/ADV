import { merge_sort, State, States } from "../algorithms/merge_sort";
import { random_permutation } from "../algorithms/random_permutation";


describe('Merge sort test', () => {
    let test_history: States = [];
    const test_array: Array<number> = random_permutation(5);
    const first_frame: Array<number> = [...test_array];
    test('test_array is not sorted.', () => {
        expect(first_frame).not.toStrictEqual([0, 1, 2, 3, 4]);
    });
    merge_sort(test_array, test_history);
    test('merge_sort sorts the array', () => {
        expect(test_array).toStrictEqual([0, 1, 2, 3, 4]);
    });
    test('save_state works as expected', () => {
        expect(first_frame).toStrictEqual(test_history[0].top_arr);
    })
})