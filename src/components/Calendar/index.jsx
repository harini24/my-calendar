import React, { useState } from "react";
import {
  format,
  parseISO,
  isValid,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  addMonths,
  subMonths,
} from "date-fns";

const Calendar = ({ events }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const startDay = startOfWeek(startOfMonth(currentDate));
  const endDay = endOfWeek(endOfMonth(currentDate));
  const daysArray = eachDayOfInterval({ start: startDay, end: endDay });

  const previousMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  // Assign positions to events for visual offset in overlapping
  const assignPositions = (events) => {
    // Initialize events with position and sort by start time.
    const positionedEvents = events
      .map((event) => ({
        ...event,
        position: 0,
        start: new Date(`${event.date}T${event.startTime}`).getTime(),
        end: new Date(`${event.date}T${event.endTime}`).getTime(),
      }))
      .sort((a, b) => a.start - b.start);

    let adjust = 0;

    if (positionedEvents.length <= 1) return positionedEvents;
    // Adjust position based on overlap.
    for (let i = 1; i < positionedEvents.length; i++) {
      if (positionedEvents[i].start < positionedEvents[i - 1].end) {
        adjust -= 15;
      }
      positionedEvents[i].position = adjust;
    }

    return positionedEvents;
  };

  // Filter and position events for the day
  const getEventsForDay = (day) => {
    const dayEvents = events.filter((event) => {
      const eventDate = parseISO(event.date);
      return (
        isValid(eventDate) &&
        format(day, "yyyy-MM-dd") === format(eventDate, "yyyy-MM-dd")
      );
    });
    return assignPositions(dayEvents);
  };
  return (
    <div className="calendar">
      <div className="nav">
        <button onClick={previousMonth}>❮</button>
        <span>{format(currentDate, "MMMM yyyy")}</span>
        <button onClick={nextMonth}>❯</button>
      </div>
      <div className="weekdays">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="days">
        {daysArray.map((day) => (
          <div
            key={day.toISOString()}
            className={`day ${
              format(day, "MM-dd-yyyy") === format(new Date(), "MM-dd-yyyy")
                ? "today"
                : ""
            }`}
          >
            {format(day, "d")}
            <div className="events">
              {getEventsForDay(day).map((event, index) => (
                <div
                  key={index}
                  className="event"
                  style={{
                    backgroundColor: event.color,
                    top: `${event.position}px`,
                  }}
                >
                  <div className="event-time">
                    🕒 {event.startTime} - {event.endTime}
                  </div>
                  <div className="event-title">{event.title}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
