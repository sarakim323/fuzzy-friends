import React from 'react';
import EventCell from './EventCell';

interface DayCellProps {
  date?: number;
  events?: PlayEvent[];
  handleDayClick: (event: string, payload?: object) => void;
}

export const DayCell: React.FC<DayCellProps> = ({
  date,
  events,
  handleDayClick,
}) => {
  let containerClass =
    'border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300 ';

  if (date === undefined) {
    containerClass += ' bg-gray-100';
  }

  const handleClick = () => {
    handleDayClick('OPENDAY');
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
                event={event}
                handleDayClick={handleDayClick}
              />
            );
          })}
        </div>
      </div>
    </td>
  );
};

export default DayCell;
