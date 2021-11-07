import React from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { MAX_DATE, MIN_DATE } from "../../constants/calendar.constants";

type Props = {
    onChangeDispatch: React.Dispatch<React.SetStateAction<Date>>;
    value: Date;
};

const Calendar = (props: Props) => {
    const { onChangeDispatch, value } = props;

    return (
        <ReactCalendar
            onChange={onChangeDispatch}
            value={value}
            maxDate={MAX_DATE}
            minDate={MIN_DATE}
        />
    );
};

export default Calendar;
