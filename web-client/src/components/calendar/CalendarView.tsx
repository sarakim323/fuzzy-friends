import React from 'react';

interface EventCellProps {
  title: string;
  start: string;
  end: string;
}

const EventCell: React.FC<EventCellProps> = ({ title, start, end }) => {
  return (
    <div className="event bg-purple-400 text-white rounded p-1 text-sm mb-1">
      <span className="event-name">{title}</span>
      <span className="time">
        {start}-{end}
      </span>
    </div>
  );
};

interface Event {
  id: string;
  date: Date;
  title: string;
  start: string;
  end: string;
}

interface DayCellProps {
  date?: number;
  events?: Event[];
}

const DayCell: React.FC<DayCellProps> = ({ date, events }) => {
  let containerClass =
    'border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300 ';

  if (date === undefined) {
    containerClass += ' bg-gray-100';
  }

  return (
    <td className={containerClass}>
      <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
        <div className="top h-5 w-full">
          <span className="text-gray-500">{date}</span>
        </div>
        <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer">
          {events?.map((event) => {
            return (
              <EventCell
                key={event.id}
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
  startDay: number;
  numOfDays: number;
}

const today = new Date();
const sampleEvents: Event[] = [
  {
    id: '1',
    title: 'Play date with Lola',
    date: new Date(today.getFullYear(), 0, today.getDate()),
    start: '13:00',
    end: '15:00',
  },
  {
    id: '2',
    title: 'Group play at Majors Hill Park',
    date: new Date(today.getFullYear(), 0, today.getDate() + 5),
    start: '13:00',
    end: '16:00',
  },
  {
    id: '3',
    title: 'Coffee time w/ Banshee',
    date: new Date(today.getFullYear(), 0, today.getDate() + 6),
    start: '11:00',
    end: '12:30',
  },
  {
    id: '4',
    title: 'Sarge Bday',
    date: new Date(today.getFullYear(), 0, today.getDate() + 8),
    start: '17:00',
    end: '19:00',
  },
];

export const CalendarView: React.FC<CalendarView> = ({
  startDay,
  numOfDays,
}) => {
  let date = 0;

  const daysEvents = (date: Date) => {
    return sampleEvents.filter((evt) => {
      console.log('event:', evt.date);
      console.log('date', date);
      return (
        evt.date.getFullYear() === date.getFullYear() &&
        evt.date.getMonth() === date.getMonth() &&
        evt.date.getDate() === date.getDate()
      );
    });
  };

  return (
    <tbody>
      {[0, 1, 2, 3, 4, 5].map((week) => {
        if (date < numOfDays) {
          return (
            <tr key={week} className="text-center h-20">
              {[0, 1, 2, 3, 4, 5, 6].map((dayOfWeek) => {
                if (week === 0 && dayOfWeek < startDay) {
                  return <DayCell key={`blank-${week}+${dayOfWeek}`} />;
                }

                date++;
                if (date > numOfDays) {
                  return <DayCell key={date} />;
                } else {
                  const events = daysEvents(new Date(`2023-01-${date}`));
                  return <DayCell key={date} date={date} events={events} />;
                }
              })}
            </tr>
          );
        }
      })}
    </tbody>
  );
};
