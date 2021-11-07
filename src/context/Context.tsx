import React, { useEffect, useState } from "react";
import { MAX_DATE, MIN_DATE } from "../constants/calendar.constants";
const defaultState = {
    dark: false,
    toggleDark: () => {},
    dayOne: MIN_DATE,
    dayTwo: MAX_DATE,
};
const Context = React.createContext(defaultState);

// Getting dark mode information from OS!
const supportsDarkMode = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches === true;

type Props = {
    children: React.ReactNode;
};

const Provider = ({ children }: Props) => {
    const [dark, setDark] = useState(defaultState.dark);
    const [dayOne, setDayOne] = useState(MIN_DATE);
    const [dayTwo, setDayTwo] = useState(MAX_DATE);

    useEffect(() => {
        // FIXME: correct the typings for this
        //@ts-expect-error
        const lsDark: boolean = JSON.parse(localStorage.getItem("dark"));
        if (lsDark) {
            setDark(lsDark);
        } else if (supportsDarkMode()) {
            setDark(true);
        }
    }, []);

    const toggleDark = () => {
        const _dark = !dark;
        localStorage.setItem("dark", JSON.stringify(_dark));
        setDark(_dark);
    };

    return (
        <Context.Provider
            value={{
                dark,
                toggleDark,
                dayOne: new Date(),
                dayTwo: new Date(),
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default Context;

export { Provider };
