import React from 'react';
import { useAtomValue } from 'jotai';
import { patternState } from '../common/store/atoms';
import Iphone from './Iphone';
import Icons from '../common/Icons';
import ProfileContent from './ProfileContent';
import Link from 'next/link';
import ProjectsContent from './ProjectsContent';
import { cn } from '@/lib/utils';
import { GridPattern } from '@/components/magicui/grid-pattern';
import PreviewWrapper from './PreviewWrapper';
import ShowCaseWrapper from './ShowCaseWrapper';

const ShowCase = () => {
  return (
    // <ShowCaseWrapper>
      <div className="overflow-scroll h-full rounded-3xl">
        <div className="overflow-auto">
          <div className="w-5/6 mx-auto mt-20 mb-6 text-center">
            <ProfileContent />
          </div>
          <div className="w-5/6  mx-auto mb-9 text-center">
            <Icons />
          </div>

          <div className="w-11/12  text-start mx-auto mb-3">
            <ProjectsContent />
          </div>
        </div>
      </div>
    // </ShowCaseWrapper>
  );
};

export default ShowCase;
