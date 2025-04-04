import React from 'react';
import AddProjectsButton from './AddProjectsButton';
import ProjectsList from './ProjectsList';

const ProjectsInfo = () => {

  return (
    <div className="mb-2 border border-zinc-300 mx-2 md:mx-0 py-7 px-5 rounded-lg">
      <h1 className="font-bold text-lg md:text-2xl mb-0.5 tracking-tight">
        Project Links
      </h1>
      <p className="text-slate-700 font-extralight mb-3 trackin text-sm">
        Show your skills through your projects
      </p>
      <div className="">
        <ProjectsList />
        <AddProjectsButton />
      </div>
    </div>
  );
};

export default ProjectsInfo;
