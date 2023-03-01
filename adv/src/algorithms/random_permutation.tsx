/**
 * Takes a number and makes a permutation 
 * @param length number: the length for the Array
 * @returns Array: an Array with a permutation of the numbers from 0-(length-1)
 */
export function random_permutation(length: number): Array<number> {

    function getRandomInt(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    function swap(A: Array<number>, i: number, j: number): void {
        const temp = A[i];
        A[i] = A[j];
        A[j] = temp;
    }
    
    const result = Array<number>(length)
    for (let i = 0; i < length; i++) {
        result[i] = i;
    }
    for (let i = 0; i < length - 1; i++) {
        const j = getRandomInt(i,length)
        swap(result, i, j);
    }
    return result;
}