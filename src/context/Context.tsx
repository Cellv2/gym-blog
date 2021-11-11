import React, { useEffect, useState } from "react";
import { MAX_DATE, MIN_DATE } from "../constants/calendar.constants";

type AppContext = {
    dark: boolean;
    dayOne: Date;
    dayTwo: Date;
    toggleDark: () => void;
    setDayOne: React.Dispatch<React.SetStateAction<Date>>;
    setDayTwo: React.Dispatch<React.SetStateAction<Date>>;
};

const defaultState: AppContext = {
    dark: false,
    dayOne: MIN_DATE,
    dayTwo: MAX_DATE,
    toggleDark: () => {},
    setDayOne: () => {},
    setDayTwo: () => {},
};

const Context = React.createContext<AppContext>(defaultState);

// Getting dark mode information from OS!
const supportsDarkMode = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches === true;

type Props = {
    children: React.ReactNode;
};

const Provider = ({ children }: Props) => {
    const [dark, setDark] = useState<boolean>(defaultState.dark);
    const [dayOne, setDayOne] = useState<Date>(MIN_DATE);
    const [dayTwo, setDayTwo] = useState<Date>(MAX_DATE);

    useEffect(() => {
        const lsDark: boolean = JSON.parse(
            localStorage.getItem("dark") || "{}"
        );
        if (lsDark) {
            setDark(lsDark);
        } else if (supportsDarkMode()) {
            setDark(true);
        }
    }, []);

    useEffect(() => {
        console.log("update event");
        console.log(`dayOne: ${dayOne}`);
        console.log(`dayTwo: ${dayTwo}`);
    }, [dayOne, dayTwo]);

    const toggleDark = () => {
        const _dark = !dark;
        localStorage.setItem("dark", JSON.stringify(_dark));
        setDark(_dark);
    };

    return (
        <Context.Provider
            value={{
                dark,
                dayOne,
                dayTwo,
                toggleDark,
                setDayOne,
                setDayTwo,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default Context;

export { Provider };
