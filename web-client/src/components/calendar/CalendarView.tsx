import axios from 'axios';
import React, { useState, useEffect } from 'react';

interface EventCellProps {
  title: string;
  start: string;
  end: string;
}

const EventCell: React.FC<EventCellProps> = ({ title, start, end }) => {
  return (
    <div className="event bg-purple-400 text-white rounded p-1 text-sm mb-1">
      <span className="event-name block">{title}</span>
      <span className="time">
        {start}-{end}
      </span>
    </div>
  );
};

interface Event {
  _id: string;
  title: string;
  description: string;
  friend: string;
  location: string;
  date: Date;
  start: string;
  end: string;
}

interface DayCellProps {
  date?: number;
  events?: Event[];
  handleDayClick: (event: string) => void;
}

const DayCell: React.FC<DayCellProps> = ({ date, events, handleDayClick }) => {
  let containerClass =
    'border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300 ';

  if (date === undefined) {
    containerClass += ' bg-gray-100';
  }

  const handleClick = () => {
    handleDayClick('OPEN');
  };

  return (
    <td className={containerClass} onClick={handleClick}>
      <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
        <div className="top h-5 w-full">
          <span className="text-gray-500">{date}</span>
        </div>
        <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer">
          {events?.map((event) => {
            return (
              <EventCell
                key={event._id}
                title={event.title}
                start={event.start}
                end={event.end}
              />
            );
          })}
        </div>
      </div>
    </td>
  );
};

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
