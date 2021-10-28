import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Calendar from "../components/Calendar/Calendar";
import Layout from "../components/layout";
import StatsTable from "../components/StatsTable/StatsTable";

const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <Calendar />
            <StatsTable />
            <p>I'm making this by following the Gatsby Tutorial.</p>
            <StaticImage alt="Not Rashid" src="../images/karin.png" />
        </Layout>
    );
};

export default IndexPage;
