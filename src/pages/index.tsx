import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <p>I'm making this by following the Gatsby Tutorial.</p>
            <StaticImage alt="Not Rashid" src="../images/karin.png" />
        </Layout>
    );
};

export default IndexPage;
