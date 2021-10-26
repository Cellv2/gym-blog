import React from "react";
import { DailyStats } from "../../../types/comparisons.types";
import ComparisonTable from "./ComparisonTable";
import DayStatsTable from "./DayStatsTable";
import { statsTable } from "./StatsTable.module.scss";

type StatsTableProps = {};

const testDataDayOne: DailyStats = {
    calories: 50,
    carbs: 25,
    fat: 10,
    protein: 50,
    sugar: 1,
    weight: 79,
};
const testDataDayTwo: DailyStats = {
    calories: 100,
    carbs: 50,
    fat: 25,
    protein: 20,
    sugar: 2,
    weight: 79,
};

const StatsTable = (props: StatsTableProps) => {
    return (
        <div className={statsTable}>
            <DayStatsTable dayStats={testDataDayOne} />
            <ComparisonTable dayOne={testDataDayOne} dayTwo={testDataDayTwo} />
            <DayStatsTable dayStats={testDataDayTwo} />
        </div>
    );
};

export default StatsTable;
