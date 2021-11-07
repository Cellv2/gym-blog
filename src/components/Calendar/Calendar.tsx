import React, { useContext, useState } from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { CalendarComponent } from "../../../types/context.types";
import { MAX_DATE, MIN_DATE } from "../../constants/calendar.constants";
import Context from '../../context/Context'

type Props = {
    currentDate?: Date; // defaults to today
    // the designated calendar component used to retrieve state from context
    calendarComponentNumber: CalendarComponent;
};

const Calendar = (props: Props) => {
    const [value, onChange] = useState(props.currentDate ?? new Date());

    const { getCalendarValue, updateCalendarValue } = useContext(Context);

    const val = getCalendarValue("one");

    return (
        <ReactCalendar
            // onChange={onChange}
            // onChange={(val, event) => updateCalendarValue(props.calendarComponentNumber, val)}
            onClickDay={(val, _) => updateCalendarValue(props.calendarComponentNumber, val)}
            value={getCalendarValue(props.calendarComponentNumber)}
            maxDate={MAX_DATE}
            minDate={MIN_DATE}
        />
    );
};

export default Calendar;
