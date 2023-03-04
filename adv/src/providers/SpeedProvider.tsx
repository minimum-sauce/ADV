import { useContext, createContext, useState } from "react";

// properties of Speed 
interface SpeedProps {
    sort_speed: number
    set_sort_speed: React.Dispatch<React.SetStateAction<number>>
}

// declaring a context to track state of sort_speed and the function to update it
const SpeedContext = createContext<SpeedProps | null>(null);

/**
 * Providing a context for children components called inside 
 * @param children : the child component to pass down context to
 * @returns A component from within SpeedContext is passed down to enable read/write acces
 */
export const SpeedProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [sort_speed, set_sort_speed] = useState(200);
    return <SpeedContext.Provider value={{ sort_speed, set_sort_speed }}>{children}</SpeedContext.Provider>
}


/**
 * A hook to ease acces to state sort_speed and set_sort_speed
 * @returns Acces to SpeedContext if reachable  
 */
export const useSpeedProvider = () => {
    const store = useContext(SpeedContext);
    if (store === null) {
        throw new Error("Context does not exist in current provider")
    } else { return store; }
}