import React from 'react';

interface Props {
  content: string;
  saveDescriptionContentToState: (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  updateDescription: (event: React.ChangeEvent<HTMLInputElement>) => void;
  toggleEdit: () => void;
}

const EditForm = ({
  content,
  saveDescriptionContentToState,
  updateDescription,
  toggleEdit,
}: Props) => {
  return (
    <>
      <form className="m-10 p-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 h-110 grid grid-cols-1 gap-4 content-center">
        <h2 className="mb-2 ml-28 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Edit Form
        </h2>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-1000 dark:text-white">
            Description
          </label>
          <textarea
            maxLength={150}
            id="description"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            defaultValue={content}
            onChange={saveDescriptionContentToState}
            placeholder="description"
            required
          />
        </div>
        <button
          title="update changes"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={updateDescription}
        >
          Update Description
        </button>
        <button
          className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
          onClick={toggleEdit}
        >
          Cancel
        </button>
      </form>
    </>
  );
};

export default EditForm;
