import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import Calendar from "../components/Calendar/Calendar";
import Layout from "../components/layout";
import StatsTable from "../components/StatsTable/StatsTable";
import { MAX_DATE, MIN_DATE } from "../constants/calendar.constants";

const IndexPage = () => {
    const [dayOne, setDayOne] = useState<Date>(MIN_DATE);
    const [dayTwo, setDayTwo] = useState<Date>(MAX_DATE);
    // const calendarOnChange = () => {}

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
