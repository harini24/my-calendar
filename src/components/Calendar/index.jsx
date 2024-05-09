import React, { useState } from 'react';
import { format, parseISO, isValid, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, addMonths, subMonths } from 'date-fns';

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

  const getEventsForDay = (day) => {
    return events.filter(event => {
      const eventDate = parseISO(event.date);
      return isValid(eventDate) && format(day, 'yyyy-MM-dd') === format(eventDate, 'yyyy-MM-dd');
    });
  };

  return (
    <div className="calendar">
      <div className="nav">
        <button onClick={previousMonth}>❮</button>
        <span>{format(currentDate, 'MMMM yyyy')}</span>
        <button onClick={nextMonth}>❯</button>
      </div>
      <div className="weekdays">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => <div key={day}>{day}</div>)}
      </div>
      <div className="days">
        {daysArray.map(day => (
          <div key={day.toISOString()} className={`day ${format(day, 'MM-dd-yyyy') === format(new Date(), 'MM-dd-yyyy') ? 'today' : ''}`}>
            {format(day, 'd')}
            <div className="events">
              {getEventsForDay(day).map((event, index) => (
                <div key={index} className="event" style={{ backgroundColor: event.color }}>
                  <span className="event-time">🕒 {event.startTime} - {event.endTime}</span>
                  <span className="event-title">{event.title}</span>
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
