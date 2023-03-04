import { cleanup, render } from '@testing-library/react';
import ArrayBar from "../components/ArrayBar";
import { random_permutation } from '../algorithms/random_permutation';

describe(ArrayBar, () => {

    afterEach(cleanup);

    const random_A = random_permutation(5);

    test('Passes correct values to child component', () => {

        const { getByTestId } = render(<ArrayBar array={random_A} />);

        for (let i = 0; i < random_A.length; i++) {
            const child_component_value = Number(getByTestId('array-bar').children[i].textContent);
            expect(child_component_value).toBe(random_A[i]);
        }
    })
})