import { Link } from "gatsby";
import React from "react";
import Context from "../../context/Context";
import { darkSwitcher, headerTitle } from "./header.module.scss";

type Props = {
    siteTitle: string;
};

const Header = ({ siteTitle }: Props) => (
    <Context.Consumer>
        {(theme) => (
            <div
                style={{
                    background: `rebeccapurple`,
                    marginBottom: `1.45rem`,
                }}
            >
                <div
                    style={{
                        margin: `0 auto`,
                        maxWidth: 960,
                        padding: `1.45rem 1.0875rem`,
                    }}
                >
                    <h1 className={headerTitle} style={{ margin: 0 }}>
                        <Link
                            to="/"
                            style={{
                                color: `white`,
                                textDecoration: `none`,
                            }}
                        >
                            {siteTitle}
                        </Link>
                    </h1>
                    <button className={darkSwitcher} onClick={theme.toggleDark}>
                        {theme.dark ? (
                            <span>Light mode ☀</span>
                        ) : (
                            <span>Dark mode ☾</span>
                        )}
                    </button>
                </div>
            </div>
        )}
    </Context.Consumer>
);

export default Header;
