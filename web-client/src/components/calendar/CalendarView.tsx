import axios from 'axios';
import React, { useState, useEffect } from 'react';
import DayCell from './DayCell';
import ScheduleDateModal from './ScheduleDateModal';

interface CalendarView {
  month: number;
  year: number;
  startDay: number;
  numOfDays: number;
  userId: string | number;
}

const blankPlayEvent: PlayEvent = {
  _id: '',
  title: 'Playdate',
  description: '',
  friend: '',
  location: '',
  start: '',
  end: '',
  date: new Date(),
};

const today = new Date();

export const CalendarView: React.FC<CalendarView> = ({
  month,
  year,
  startDay,
  numOfDays,
  userId,
}) => {
  const [events, setEvents] = useState<PlayEvent[] | undefined>(undefined);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [playEvent, setPlayEvent] = useState<PlayEvent>(blankPlayEvent);

  let date = 0;

  const sameDay = (ds: Date) => {
    return (
      ds.getFullYear() === year &&
      ds.getMonth() === month &&
      ds.getDate() === date
    );
  };
  const daysEvents = (date: number) => {
    if (events === undefined) {
      return [];
    }

    return events.filter((evt) => {
      return sameDay(new Date(evt.date));
    });
  };

  const fetchEvents = () => {
    axios
      .get('http://127.0.0.1:3000/users/test/events')
      .then((resp) => {
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

  const handleDayClick = (event: string, payload?: object) => {
    if (event === 'ADDED' || event === 'DELETED') {
      fetchEvents();
    } else if (event === 'EDITED') {
      // put
    } else if (event === 'OPENDAY') {
      setPlayEvent(blankPlayEvent);
    } else if (event === 'OPENEVENT') {
      setPlayEvent(payload as PlayEvent);
    }
    // // CLOSE
    // // OPEN
    // // ADDED
    // // DELETE
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <tbody>
      <ScheduleDateModal
        modalIsOpen={modalIsOpen}
        handleDayClick={handleDayClick}
        playEvent={playEvent}
        userId={userId}
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
                      isToday={false}
                    />
                  );
                }

                date++;
                if (date > numOfDays) {
                  return (
                    <DayCell
                      key={date}
                      handleDayClick={handleDayClick}
                      isToday={false}
                    />
                  );
                } else {
                  const events = daysEvents(date);
                  return (
                    <DayCell
                      key={date}
                      date={date}
                      events={events}
                      handleDayClick={handleDayClick}
                      isToday={sameDay(today)}
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
