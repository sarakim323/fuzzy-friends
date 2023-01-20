import React from 'react';

interface EventCellProps {
  event: PlayEvent;
  handleDayClick: (event: string, payload?: object) => void;
}

export const EventCell: React.FC<EventCellProps> = ({
  event,
  handleDayClick,
}) => {
  return (
    <div
      className="event bg-purple-400 text-white rounded p-1 text-sm mb-1 hover:bg-purple-700"
      onClick={(e) => {
        e.stopPropagation();
        handleDayClick('OPENEVENT', event);
      }}
    >
      <span className="event-name block">{event.title}</span>
      <span className="time">
        {event.start}-{event.end}
      </span>
    </div>
  );
};

export default EventCell;
