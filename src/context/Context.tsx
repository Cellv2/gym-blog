import React from "react";
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

class Provider extends React.Component {
    state = {
        dark: false,
        dayOne: MIN_DATE,
        dayTwo: MAX_DATE,
    };

    toggleDark = () => {
        let dark = !this.state.dark;
        localStorage.setItem("dark", JSON.stringify(dark));
        this.setState({ dark });
    };

    componentDidMount() {
        // Getting dark mode value from localStorage!
        //@ts-expect-error
        const lsDark = JSON.parse(localStorage.getItem("dark"));
        if (lsDark) {
            this.setState({ dark: lsDark });
        } else if (supportsDarkMode()) {
            this.setState({ dark: true });
        }
    }

    render() {
        const { children } = this.props;
        const { dark } = this.state;
        return (
            <Context.Provider
                value={{
                    dark,
                    toggleDark: this.toggleDark,
                    dayOne: new Date(),
                    dayTwo: new Date(),
                }}
            >
                {children}
            </Context.Provider>
        );
    }
}

export default Context;

export { Provider };
