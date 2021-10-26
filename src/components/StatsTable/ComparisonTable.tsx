import React from "react";
import { DailyStats } from "../../../types/comparisons.types";
import { comparisonTable } from "./ComparisonTable.module.scss";

type Props = {
    dayOne: DailyStats;
    dayTwo: DailyStats;
};

const calculateDifferences = (
    dayOne: DailyStats,
    dayTwo: DailyStats
): DailyStats => {
    const diff = Object.keys(dayTwo).reduce(
        (acc, curr) => (
            (acc[curr as keyof DailyStats] =
                dayTwo[curr as keyof DailyStats] -
                dayOne[curr as keyof DailyStats]),
            acc
        ),
        {} as DailyStats
    );

    return diff;
};

const ComparisonTable = (props: Props) => {
    const { dayOne, dayTwo } = props;
    const diff = calculateDifferences(dayOne, dayTwo);
    const listItems = Object.keys(diff).map((key) => {
        return <li>{diff[key as keyof DailyStats]}</li>;
    });

    return (
        <div className={comparisonTable}>
            <ul>{listItems}</ul>
        </div>
    );
};

export default ComparisonTable;
