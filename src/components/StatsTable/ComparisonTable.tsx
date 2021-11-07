import React from "react";
import { DailyStats } from "../../../types/comparisons.types";
import {
    comparisonTable,
    fatter,
    identical,
    notFatter,
} from "./ComparisonTable.module.scss";

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

const calculateTextColour = (value: DailyStats[keyof DailyStats]) => {
    // as we subtract yesterday from today's value, the number will be negative if yesterday was larger than today
    // if today was lower, then we show this as green. If it's the same, it's black. If it's greater, it's red
    if (value === 0) {
        return identical;
    } else if (value > 0) {
        return fatter;
    } else {
        return notFatter;
    }
};

const ComparisonTable = (props: Props) => {
    const { dayOne, dayTwo } = props;
    const diff = calculateDifferences(dayOne, dayTwo);
    const listItems = Object.keys(diff).map((key) => {
        const textClass = calculateTextColour(diff[key as keyof DailyStats]);
        // TODO: fix the key below!!!!!
        return <li key={Math.random()} className={textClass}>{diff[key as keyof DailyStats]}</li>;
    });

    return (
        <div className={comparisonTable}>
            <ul>{listItems}</ul>
        </div>
    );
};

export default ComparisonTable;
