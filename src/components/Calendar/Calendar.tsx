import React, { useState } from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { MAX_DATE, MIN_DATE } from "../../constants/calendar.constants";

type Props = {
    initialDate?: Date; // defaults to today
};

const Calendar = (props: Props) => {
    const [value, onChange] = useState(props.initialDate ?? new Date());

    return (
        <ReactCalendar
            onChange={onChange}
            value={value}
            maxDate={MAX_DATE}
            minDate={MIN_DATE}
        />
    );
};

export default Calendar;
