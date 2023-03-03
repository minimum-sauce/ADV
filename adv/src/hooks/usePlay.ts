import React, { useEffect, useRef, useState } from "react";
import { useSpeedProvider } from "../providers/SpeedProvider";

const usePlay = (step: () => void, multiplier = 1) => {
    const timer = useRef<NodeJS.Timer>();
    const { sort_speed } = useSpeedProvider();

    // state variale to track state of play button and a function to update it 
    const [play, set_play] = useState<boolean>(false);

    useEffect(() => {
        if (timer.current) {
            clearInterval(timer.current)
            timer.current = setInterval(() => step(), multiplier * sort_speed)
        }

    }, [sort_speed])


    useEffect(() => {
        if (play) {
            timer.current = setInterval(() => step(), multiplier * sort_speed)
        }
        return () => {
            clearInterval(timer.current)
        }

    }, [play]);

    return { play, set_play };
}

export default usePlay

