'use client';
import { useAtomValue } from 'jotai';
import React from 'react';
import Link from 'next/link';
import {
  projectsLenState,
  projectsState,
  projectType,
} from '../common/store/atoms';
import { useGetParams } from '@/hooks/useGetParams';

const ProjectsContent = () => {
  let projects = useAtomValue(projectsState);
  const formObj = useGetParams();
  const projectsLen = useAtomValue(projectsLenState);
  projects = formObj ? formObj.projects : projects;
  return (
    <div className="">
      {projectsLen != 0 && (
        <h1 className="mx-1 text-lg mb-2 font-medium uppercase tracking-wide">
          My Projects
        </h1>
      )}
      {projects.map((val, id) => {
        return (
          <div className={`${formObj ? 'w-2/6' : 'w-full'} mx-auto`} key={id}>
            {val.projectName != '' && (
              <Link
                href={val.projectLink}
                key={id}
                target="_blank"
                className="rounded-lg transition hover:-translate-y-1 hover:-translate-x-2 hover:shadow-[7px_7px_0px_rgba(0,0,0,0.9)] mb-2 block font-bold px-4 py-2 w-full bg-slate-200 "
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
