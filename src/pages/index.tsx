import { StaticImage } from "gatsby-plugin-image";
import React, { useContext } from "react";
import Calendar from "../components/Calendar/Calendar";
import Layout from "../components/layout";
import StatsTable from "../components/StatsTable/StatsTable";
import Context from "../context/Context";

const IndexPage = () => {
    const { dayOne, dayTwo, setDayOne, setDayTwo } = useContext(Context);

    return (
        <Layout pageTitle="Home Page">
            <Calendar value={dayOne} onChangeDispatch={setDayOne} />
            <Calendar value={dayTwo} onChangeDispatch={setDayTwo} />
            <StatsTable />
            <p>I'm making this by following the Gatsby Tutorial.</p>
            <StaticImage alt="Not Rashid" src="../images/karin.png" />
        </Layout>
    );
};

export default IndexPage;
