import axios from 'axios';
import React, { useState, useEffect } from 'react';
import DayCell from './DayCell';

interface CalendarView {
  month: number;
  year: number;
  startDay: number;
  numOfDays: number;
  handleDayClick: (event: string) => void;
}

export const CalendarView: React.FC<CalendarView> = ({
  month,
  year,
  startDay,
  numOfDays,
  handleDayClick,
}) => {
  const [events, setEvents] = useState<Event[] | undefined>(undefined);

  let date = 0;

  const daysEvents = (date: number) => {
    if (events === undefined) {
      return [];
    }

    return events.filter((evt) => {
      const evtDate = new Date(evt.date);
      return (
        evtDate.getFullYear() === year &&
        evtDate.getMonth() === month &&
        evtDate.getDate() === date
      );
    });
  };

  useEffect(() => {
    // use axios
    axios
      .get('http://127.0.0.1:3000/users/test/events')
      .then((resp) => {
        console.log('what is the response:', resp);
        setEvents(resp.data);
      })
      .catch((err) => {
        console.log('got an error message', err);
      });
  }, []);

  return (
    <tbody>
      {[0, 1, 2, 3, 4, 5].map((week) => {
        if (date < numOfDays) {
          return (
            <tr key={week} className="text-center h-20">
              {[0, 1, 2, 3, 4, 5, 6].map((dayOfWeek) => {
                if (week === 0 && dayOfWeek < startDay) {
                  return (
                    <DayCell
                      key={`blank-${week}+${dayOfWeek}`}
                      handleDayClick={handleDayClick}
                    />
                  );
                }

                date++;
                if (date > numOfDays) {
                  return <DayCell key={date} handleDayClick={handleDayClick} />;
                } else {
                  const events = daysEvents(date);
                  return (
                    <DayCell
                      key={date}
                      date={date}
                      events={events}
                      handleDayClick={handleDayClick}
                    />
                  );
                }
              })}
            </tr>
          );
        }
      })}
    </tbody>
  );
};
