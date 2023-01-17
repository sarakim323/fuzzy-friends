import React from 'react';

interface DayCellProps {
  date?: number;
}

const DayCell: React.FC<DayCellProps> = ({ date }) => {
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
      </div>
    </td>
  );
};

interface CalendarView {
  startDay: number;
  numOfDays: number;
}

export const CalendarView: React.FC<CalendarView> = ({
  startDay,
  numOfDays,
}) => {
  let date = 0;

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
                  return <DayCell key={date} date={date} />;
                }
              })}
            </tr>
          );
        }
      })}
    </tbody>
  );
};
