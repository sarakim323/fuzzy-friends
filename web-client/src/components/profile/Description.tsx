import React from 'react';
import EditIcon from '@mui/icons-material/Edit';

interface Props {
  id: string;
  content: string;
  editDescription: (id: string) => void;
}

const Description = ({ id, content, editDescription }: Props) => {
  return (
    <>
      <div className="card card-width bg-dark">
        <section className="flex justify-center space-x-20">
          <h3 className="mb-5 text-l font-bold tracking-tight text-gray-700 dark:text-gray">
            About
          </h3>
          <span
            className="inline-block hover:bg-gray-900 dark:hover:bg-gray-700"
            title="Edit Description"
            onClick={() => editDescription(id)}
          >
            <EditIcon />
          </span>
        </section>
        <hr className="w-48 h-1 mx-auto my-1 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
        <p>{content}</p>
      </div>
    </>
  );
};

export default Description;
