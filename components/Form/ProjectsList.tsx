'use client';
import React from 'react';
import FormField from './FormField';
import { projectsState } from '../common/store/atoms';
import { RxCross1 } from 'react-icons/rx';
import { useAtom } from 'jotai';

const ProjectsList = () => {
  const [projectsVal, setProjects] = useAtom(projectsState);
  console.log(projectsVal);
  const removeProjectHandler = (id: number) => {
    let newProjVals = [...projectsVal];
    newProjVals.splice(id, 1);
    setProjects(newProjVals);
  };

  return (
    <>
      {projectsVal.map((val, id) => {
        return (
          <div key={id} className="grid relative grid-cols-2">
            <FormField
              name="Project Name"
              placeHolderVal="Social Media"
              className="col-span-1"
              stateVal={projectsState}
              projVal={val}
              id={id}
            />
            <FormField
              name="Project Link"
              placeHolderVal="https://x.com/cena"
              className="col-span-1"
              stateVal={projectsState}
              projVal={val}
              id={id}
            />
            <div
              onClick={() => removeProjectHandler(id)}
              className="absolute cursor-pointer top-2 right-0"
            >
              <RxCross1 size={10} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProjectsList;
