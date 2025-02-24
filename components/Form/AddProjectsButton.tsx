'use client';
import React from 'react';
import { IoIosAdd } from 'react-icons/io';
import { useSetAtom } from 'jotai';
import { projectsState } from '../common/store/atoms';

const AddProjectsButton = () => {
  const setProjectsVal = useSetAtom(projectsState);
  const addProjectHandler = () => {
    setProjectsVal((prev) => {
      return [...prev, { projectName: '', projectLink: '' }];
    });
  };

  return (
    <button
      onClick={addProjectHandler}
      className="block border mx-auto rounded-lg py-0.5 w-full"
    >
      <IoIosAdd size={30} className="mx-auto" />
    </button>
  );
};

export default AddProjectsButton;
