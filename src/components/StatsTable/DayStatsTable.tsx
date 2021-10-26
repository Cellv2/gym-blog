import React from "react";
import { DailyStats } from "../../../types/comparisons.types";
import { dayStatsTable } from "./DayStatsTable.module.scss";

type Props = {
    dayStats: DailyStats;
};

const DayStatsTable = (props: Props) => {
    const { dayStats } = props;
    const listItems = Object.keys(dayStats).map((key) => {
        return <li>{dayStats[key as keyof DailyStats]}</li>;
    });

    return (
        <div className={dayStatsTable}>
            <ul>{listItems}</ul>
        </div>
    );
};

export default DayStatsTable;
