import axios from 'axios';
import React, { useState, useEffect } from 'react';
import DayCell from './DayCell';
import ScheduleDateModal from './ScheduleDateModal';

interface CalendarView {
  month: number;
  year: number;
  startDay: number;
  numOfDays: number;
}

export const CalendarView: React.FC<CalendarView> = ({
  month,
  year,
  startDay,
  numOfDays,
}) => {
  const [events, setEvents] = useState<Event[] | undefined>(undefined);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [playEvent, setPlayEvent] = useState<object>({
    title: 'Playdate',
    friend: '',
    description: '',
    location: '',
    start: '',
    end: '',
  });
  console.log(playEvent);

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

  const fetchEvents = () => {
    axios
      .get('http://127.0.0.1:3000/users/test/events')
      .then((resp) => {
        console.log('what is the response:', resp);
        setEvents(resp.data);
      })
      .catch((err) => {
        console.log('got an error message', err);
      });
  };
  useEffect(() => {
    // use axios
    fetchEvents();
  }, []);

  const handleDayClick = (event: string) => {
    console.log('handleDayClick event:', event);
    if (event === 'ADDED') {
      // refresh event listings
      fetchEvents();
    } else if (event === 'DELETED') {
      // delete
    } else if (event === 'EDITED') {
      // put
    }

    // CLOSE
    // OPEN
    // ADDED
    // DELETE
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <tbody>
      <ScheduleDateModal
        modalIsOpen={modalIsOpen}
        handleDayClick={handleDayClick}
        playEvent={playEvent}
        setPlayEvent={setPlayEvent}
      />
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
