import React from "react";
import { useSpeedProvider } from "../providers/SpeedProvider";


/**
 * A slider component bound to the state context of SpeedProvider
 * @param props takes same attributes as html element input
 * @returns A SortSpeed component to set_sort_speed state of sort_speed in the context of 
 * SpeedProvider
 */
const SortSpeed: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
    //declare state from SpeedProvider see ../providers/SpeedProvider
    const { sort_speed, set_sort_speed } = useSpeedProvider();
    return (
        <div className="speed-provider">This is SPEEDPROVIDER
            <input
                className="slider"
                type="range"
                {...props}
                style={{ direction: "rtl" }}
                value={sort_speed}
                onChange={(event) => set_sort_speed(+event.target.value)}>
            </input>
        </div>
    )

}

export default SortSpeed