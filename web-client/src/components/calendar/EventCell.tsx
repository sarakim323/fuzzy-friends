import React from 'react';

interface EventCellProps {
  title: string;
  start: string;
  end: string;
}

export const EventCell: React.FC<EventCellProps> = ({ title, start, end }) => {
  return (
    <div className="event bg-purple-400 text-white rounded p-1 text-sm mb-1">
      <span className="event-name block">{title}</span>
      <span className="time">
        {start}-{end}
      </span>
    </div>
  );
};

export default EventCell;
