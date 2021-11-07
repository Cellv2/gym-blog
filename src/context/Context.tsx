import React, { useEffect, useState } from "react";
import { MAX_DATE, MIN_DATE } from "../constants/calendar.constants";
import { CalendarComponent } from "../../types/context.types";

type AppContext = {
    dark: boolean;
    getCalendarValue: (dayToGet: CalendarComponent) => Date;
    updateCalendarValue: (dayToUpdate: CalendarComponent, value: Date) => void;
    toggleDark: () => void;
};
const defaultState: AppContext = {
    dark: false,
    getCalendarValue: (dayToGet: CalendarComponent) => new Date(),
    toggleDark: () => {},
    updateCalendarValue: (dayToUpdate: CalendarComponent, value: Date) => {},
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
        // FIXME: correct the typings for this
        //@ts-expect-error
        const lsDark: boolean = JSON.parse(localStorage.getItem("dark"));
        if (lsDark) {
            setDark(lsDark);
        } else if (supportsDarkMode()) {
            setDark(true);
        }
    }, []);

    useEffect(() => {
        console.log("update event");
        console.log(`dayOne: ${dayOne}`)
        console.log(`dayTwo: ${dayTwo}`)
    }, [dayOne, dayTwo])

    const toggleDark = () => {
        const _dark = !dark;
        localStorage.setItem("dark", JSON.stringify(_dark));
        setDark(_dark);
    };

    const getCalendarValue = (dayToGet: CalendarComponent): Date => {
        if (dayToGet === "one") {
            return dayOne;
        } else {
            return dayTwo;
        }
    };

    const updateCalendarValue = (
        dayToUpdate: CalendarComponent,
        value: Date
    ) => {
        if (dayToUpdate === "one") {
            setDayOne(value);
        } else if (dayToUpdate === "two") {
            setDayTwo(value);
        }
    };

    return (
        <Context.Provider
            value={{
                dark,
                getCalendarValue,
                toggleDark,
                updateCalendarValue,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default Context;

export { Provider };
