import React from 'react';
import Iphone from './Iphone';
import Icons from '../common/Icons';
import ProfileContent from './ProfileContent';
import Link from 'next/link';
import ProjectsContent from './ProjectsContent';
import { cn } from '@/lib/utils';
import { GridPattern } from '@/components/magicui/grid-pattern';
import { DotPattern } from '@/components/magicui/dot-pattern';
import PreviewWrapper from './PreviewWrapper';

const Preview = () => {
  return (
    <PreviewWrapper>
      <div className=" overflow-scroll h-full rounded-3xl">
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
    </PreviewWrapper>
  );
};

export default Preview;
