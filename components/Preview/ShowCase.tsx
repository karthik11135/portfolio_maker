import React from 'react';
import Icons from '../common/Icons';
import ProfileContent from './ProfileContent';
import ProjectsContent from './ProjectsContent';

const ShowCase = () => {
  return (
    // <ShowCaseWrapper>
    <div className="overflow-scroll no-scroll h-full rounded-3xl">
      <div className="overflow-auto">
        <div className="w-5/6 mx-auto mt-20 mb-6 text-center">
          <ProfileContent />
        </div>
        <div className="w-5/6  mx-auto mb-9 text-center">
          <Icons />
        </div>

        <div className="w-11/12 text-start mx-auto mb-3">
          <ProjectsContent />
        </div>
      </div>
    </div>
    // </ShowCaseWrapper>
  );
};

export default ShowCase;
