import { cleanup, render, fireEvent } from '@testing-library/react';
import Stepper from '../components/Stepper';



describe(Stepper, () => {

    afterEach(cleanup)

    const next = jest.fn()

    const back = jest.fn()

    const play = jest.fn()


    test('next button calls passed function', () => {
        const { getByTestId } = render(<Stepper next={next} prev={back} play={play} />);
        const next_button = getByTestId("next-btn")
        fireEvent.click(next_button)
        expect(next).toHaveBeenCalledTimes(1)
    });

    test('prev button calls passed function', () => {
        const { getByTestId } = render(<Stepper next={next} prev={back} play={play} />);
        const prev_button = getByTestId("prev-btn")
        fireEvent.click(prev_button)
        expect(back).toHaveBeenCalledTimes(1)
    });

    test('play button calls passed function', () => {
        const { getByTestId } = render(<Stepper next={next} prev={back} play={play} />);
        const play_button = getByTestId("play-btn")
        fireEvent.click(play_button)
        expect(play).toHaveBeenCalledTimes(1)
    });


})

