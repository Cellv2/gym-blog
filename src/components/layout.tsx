import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import Context from "../context/Context";
import Header from "./Header/Header";
import {
    container,
    dark,
    heading,
    light,
    navLinkItem,
    navLinks,
    navLinkText,
} from "./layout.module.scss";

const Layout = ({
    pageTitle,
    children,
}: {
    pageTitle: string;
    children: React.ReactNode;
}) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <Context.Consumer>
            {(theme) => (
                <div className={`${container} ${theme.dark ? dark : light}`}>
                    <title>
                        {pageTitle} | {data.site.siteMetadata.title}
                    </title>
                    <Header siteTitle={data.site.siteMetadata.title} />
                    <nav>
                        <ul className={navLinks}>
                            <li className={navLinkItem}>
                                <Link to="/" className={navLinkText}>
                                    Home
                                </Link>
                            </li>
                            <li className={navLinkItem}>
                                <Link to="/about" className={navLinkText}>
                                    About
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <main>
                        <h1 className={heading}>{pageTitle}</h1>
                        {children}
                    </main>
                </div>
            )}
        </Context.Consumer>
    );
};

export default Layout;
