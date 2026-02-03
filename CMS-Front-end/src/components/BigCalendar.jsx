import { useState } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { calendarEvents } from "../lib/data";

export function BigCalendar() {
  const localizer = momentLocalizer(moment);
  const [view, setView] = useState(Views.WORK_WEEK);

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={[Views.WORK_WEEK, Views.DAY]}
      view={view}
      onView={setView}
      defaultDate={new Date(2024, 7, 12)}
      min={new Date(2025,1,0,8,0,0)}
      max={new Date(2025,1,0,17,0,0)}
      style={{ height: "98%" }}
    />
  );
}
