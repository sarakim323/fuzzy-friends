import React from 'react';
import { Navbar } from '../components';

interface IProps {
  section: React.ReactNode;
}

export const Main: React.FC<IProps> = ({ section }) => {
  return (
    <div>
      <Navbar />
      {section}
    </div>
  );
};
