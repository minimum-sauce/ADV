import { useEffect, useRef, useState } from "react";
import { useSpeedProvider } from "../providers/SpeedProvider";


/**
 * A hook to toggle play/pause with the 
 * stepping speed of SpeedProvider
 * @param step: takes a function to get to next step
 * @param multiplier: multiplier to customise stepping speed
 * @returns A custom hook
 */
const usePlay = (step: () => void, multiplier = 1) => {
    const timer = useRef<NodeJS.Timer>();
    // get context of SpeedProvider
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

