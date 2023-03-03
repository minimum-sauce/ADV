import React from "react";
import { useSpeedProvider } from "../providers/SpeedProvider";



const SortSpeed: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
    const { sort_speed, set_sort_speed } = useSpeedProvider();

    return (
        <div className="speed-provider">This is SPEEDPROVIDER
            <input
                className="slider"
                type="range" {...props}
                style={{ direction: "rtl" }}
                value={sort_speed}
                onChange={(event) => set_sort_speed(+event.target.value)}>
            </input>
        </div>
    )

}

export default SortSpeed