import React, { useState } from "react";

// type of properties
interface Props {
    next: () => void
    prev: () => void
    play?: () => void
    state_play?: boolean
}
/**
 * A Stepper compoenent with buttons to step and play
 * @param props functions for next_step, prev_step and play
 * @returns A React functional component
 */
const Stepper: React.FC<Props> = ({ next, prev, play, state_play }) => {

    return (
        <div className="stepper">
            <button onClick={prev}>{"<"}</button>
            <button onClick={play}>{!state_play ? "Play" : "Pause"}</button>
            <button onClick={next}>{">"}</button>
        </div>
    )
}

export default Stepper