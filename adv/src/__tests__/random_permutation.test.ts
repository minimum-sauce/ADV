import { random_permutation } from "../algorithms/random_permutation"


describe('Random permutation test', () => {
    const a: Array<number> = random_permutation(5);
    const b: Array<number> = random_permutation(5);
    test('random_permutation contains the right elements', () => {
        expect(a).toContain(0);
        expect(a).toContain(1);
        expect(a).toContain(2);
        expect(a).toContain(3);
        expect(a).toContain(4);
    })
    test('random_permutation is the right length', () => {
        expect(a.length).toBe(5);
    })
    test('random_permutation is indeed random', () => {
        expect(a).not.toStrictEqual(b);
    })
})