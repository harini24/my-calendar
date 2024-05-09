import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, addMonths, subMonths } from 'date-fns';

const Calendar = ({ events }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const startDay = startOfWeek(startOfMonth(currentDate));
  const endDay = endOfWeek(endOfMonth(currentDate));
  const daysArray = eachDayOfInterval({ start: startDay, end: endDay });
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const previousMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const getEventsForDay = (day) => {
    return events.filter(event => 
      format(day, 'yyyy-MM-dd') === format(new Date(event.date), 'yyyy-MM-dd')
    );
  };

  return (
    <div className="calendar">
      <div className="nav">
        <button onClick={previousMonth}>❮</button>
        <span>{format(currentDate, 'MMMM yyyy')}</span>
        <button onClick={nextMonth}>❯</button>
      </div>
      <div className="weekdays">
        {weekDays.map(day => <div key={day}>{day}</div>)}
      </div>
      <div className="days">
        {daysArray.map(day => (
          <div key={day.toISOString()} className={`day ${format(day, 'MM-dd-yyyy') === format(new Date(), 'MM-dd-yyyy') ? 'today' : ''}`}>
            {format(day, 'd')}
            <div className="events">
              {getEventsForDay(day).map(event => (
                <div key={event.title} className="event" style={{ backgroundColor: event.color }}>
                  {event.title}
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
