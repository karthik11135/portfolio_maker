import React from 'react';
import Iphone from './Iphone';
import Icons from '../common/Icons';
import ProfileContent from './ProfileContent';
import Link from 'next/link';
import ProjectsContent from './ProjectsContent';

const Preview = () => {
  return (
    <div className="w-[330px] mx-auto h-[80vh] mt-16 relative border-[12px] border-black rounded-[2.8rem]">
      <div className=" h-full rounded-3xl">
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
      <Iphone />
    </div>
  );
};

export default Preview;
