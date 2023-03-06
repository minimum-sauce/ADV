import { get_frames, insertion_sort_steps, States } from "../algorithms/insertion_sort";
import { random_permutation } from "../algorithms/random_permutation"



describe('Insertion sort test', () => {
    const test_array: Array<number> = random_permutation(5);
    const unsorted: Array<number> = [...test_array];
    
    test('test_array is not sorted', () => {
        expect(unsorted).not.toStrictEqual([0, 1, 2, 3, 4]);
    });
    insertion_sort_steps(test_array);
    test('insertion_sort_steps sorts the array', () => {
        expect(test_array).toStrictEqual([0, 1, 2, 3, 4]);
    });
    const test_frames: States = get_frames();
    test('save and get_frames work as expacted', () => {
        expect(test_frames[0].value).toStrictEqual(unsorted);
    })
})