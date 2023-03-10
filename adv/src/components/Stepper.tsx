import React from "react";

// interface for the properties of the Stepper component
interface Props {
    next: () => void
    prev: () => void
    play?: () => void
    state_play?: boolean
}
/**
 * A Stepper compoenent with step and play/pause buttons 
 * @param props takes functions for next_step, prev_step, play and boolen of state_play
 * @returns A React functional component
 */
const Stepper: React.FC<Props> = ({ next, prev, play, state_play }) => {

    return (
        <div data-tesid="stepper" className="stepper">
            <button data-testid="prev-btn" onClick={prev}>{"<"}</button>
            <button data-testid="play-btn" onClick={play}>{!state_play ? "Play" : "Pause"}</button>
            <button data-testid="next-btn" onClick={next}>{">"}</button>
        </div>
    )
}

export default Stepper