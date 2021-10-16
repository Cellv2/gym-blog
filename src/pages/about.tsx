import { Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>Rashid is on this site somewhere</p>
            <p>
                But until you find him, here's the home page{" "}
                <Link to="/">link</Link>
            </p>
        </Layout>
    );
};

export default AboutPage;
