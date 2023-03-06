import { random_permutation } from "../algorithms/random_permutation"
import { find_smallest, selection_sort } from "../algorithms/selection_sort";


describe('Selection sort test', () => {
    const test_array: Array<number> = random_permutation(5);
    const unsorted: Array<number> = [...test_array];
    test('test_array is not sorted.', () => {
        expect(unsorted).not.toStrictEqual([0, 1, 2, 3, 4]);
    })
    selection_sort(test_array);
    test('Find smallest', () => {
        expect(find_smallest(test_array, 0, 4)).toBe(0);
    });
    
    test('selection_sort returns a sorted array', () => {
        expect(test_array).toStrictEqual([0, 1, 2, 3, 4]);
    })
})