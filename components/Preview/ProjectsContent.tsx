'use client';
import { useAtomValue } from 'jotai';
import React from 'react';
import Link from 'next/link';
import { projectsLenState, projectsState } from '../common/store/atoms';

const ProjectsContent = () => {
  const projects = useAtomValue(projectsState);
  const projectsLen = useAtomValue(projectsLenState);
  return (
    <div className="">
      {projectsLen != 0 && (
        <h1 className="mx-1 text-lg mb-2 font-medium uppercase tracking-wide">
          My Projects
        </h1>
      )}
      {projects.map((val, id) => {
        return (
          <div key={id}>
            {val.projectName != '' && (
              <Link
                href={val.projectLink}
                key={id}
                target="_blank"
                className="rounded-lg transition hover:-translate-y-1 hover:-translate-x-2 hover:shadow-[7px_7px_0px_rgba(0,0,0,0.9)] mb-2 block font-bold px-4 py-2 w-full bg-blue-100 "
              >
                {val.projectName}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsContent;
