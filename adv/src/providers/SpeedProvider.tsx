import { useContext, createContext, useState } from "react";

interface SpeedProps {
    sort_speed: number
    set_sort_speed: React.Dispatch<React.SetStateAction<number>>
}

const SpeedContext = createContext<SpeedProps | null>(null);

export const SpeedProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [sort_speed, set_sort_speed] = useState(200);
    return <SpeedContext.Provider value={{ sort_speed, set_sort_speed }}>{children}</SpeedContext.Provider>
}

export const useSpeedProvider = () => {
    const store = useContext(SpeedContext);
    if (store === null) {
        throw new Error("FEL")
    } else { return store; }

}