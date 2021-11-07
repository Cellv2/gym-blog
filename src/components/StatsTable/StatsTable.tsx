import React from "react";
import { DailyStats, statHeadings } from "../../../types/comparisons.types";
import ComparisonTable from "./ComparisonTable";
import DayStatsTable from "./DayStatsTable";
import {
    border,
    green,
    margin,
    padding,
    red,
    statsTable,
    tableBody,
    tableHeader,
    tdWrapper,
} from "./StatsTable.module.scss";

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
    weight: 80,
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

const StatsTable = (props: StatsTableProps) => {
    const diff = calculateDifferences(testDataDayOne, testDataDayTwo);

    return (
        <>
            <div className={statsTable}>
                <div className={margin}>
                    <div className={padding}>
                        <div className={border}>
                            <table>
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className={tableHeader}>
                                            &nbsp;
                                        </th>
                                        <th scope="col" className={tableHeader}>
                                            Date 1
                                        </th>
                                        <th scope="col" className={tableHeader}>
                                            Diff
                                        </th>
                                        <th scope="col" className={tableHeader}>
                                            Date 2
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className={tableBody}>
                                    {statHeadings.map((heading) => {
                                        const dayOneRowData =
                                            testDataDayOne[heading];
                                        const dayTwoRowData =
                                            testDataDayTwo[heading];
                                        const diffData = diff[heading];

                                        // as we subtract yesterday from today's value, the number will be negative if yesterday was larger than today
                                        // if today was lower, then we show this as green. If it's the same, it's transparent. If it's greater, it's red
                                        const weightElementClasses =
                                            diffData === 0
                                                ? `${tdWrapper}`
                                                : diffData < 0
                                                ? `${tdWrapper} ${green}`
                                                : `${tdWrapper} ${red}`;

                                        // TODO: fix the key below!!!!!
                                        return (
                                            <tr key={Math.random()}>
                                                <th>{heading}</th>
                                                <td className={tdWrapper}>
                                                    {dayOneRowData}
                                                </td>
                                                {heading === "weight" ? (
                                                    <td
                                                        className={
                                                            weightElementClasses
                                                        }
                                                    >
                                                        {(diffData <= 0
                                                            ? ""
                                                            : "+") + diffData}
                                                    </td>
                                                ) : (
                                                    <td
                                                        className={`${tdWrapper}`}
                                                    >
                                                        {(diffData <= 0
                                                            ? ""
                                                            : "+") + diffData}
                                                    </td>
                                                )}
                                                <td className={tdWrapper}>
                                                    {dayTwoRowData}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <DayStatsTable dayStats={testDataDayOne} />
            <ComparisonTable dayOne={testDataDayOne} dayTwo={testDataDayTwo} />
            <DayStatsTable dayStats={testDataDayTwo} />
        </>
    );
};

export default StatsTable;
