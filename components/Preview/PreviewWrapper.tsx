'use client';
import React from 'react';
import { useAtomValue } from 'jotai';
import { patternState, themeState } from '../common/store/atoms';
import { GridPattern } from '../magicui/grid-pattern';
import { cn } from '@/lib/utils';
import { useGetParams } from '@/hooks/useGetParams';
import ShowCase from './ShowCase';

const PreviewWrapper = ({ children }: { children: React.ReactNode }) => {
  const themeVal = useAtomValue(themeState);
  const pattern = useAtomValue(patternState);
  const formObj = useGetParams();
  const customClass = formObj
    ? `w-full h-full`
    : 'w-[330px] h-[80vh] mt-16  border-[11px] border-black rounded-[2.8rem]';
  //   const vals = ['bg-blue-100', 'bg-pink-100', 'bg-red-200', 'bg-red-100'];
  console.log('from wrapper', formObj?.theme);
  return (
    <div
      className={` ${customClass} mb-0 bg-gradient-to-b from-${
        formObj?.theme || themeVal
      }-200 to-white mx-auto relative pb-1`}
    >
      <div className="">
        {(formObj?.pattern || pattern) && (
          <GridPattern
            squares={[
              [4, 4],
              [5, 1],
              [8, 2],
              [5, 3],
              [5, 5],
              [10, 10],
              [12, 15],
              [10, 15],
              [15, 10],
            ]}
            className={cn(
              '[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] mb-0',
              'inset-x-0 opacity-70 z-0 h-[90%] skew-y-12'
            )}
          />
        )}
      </div>

      {children}
    </div>
  );
};

export default PreviewWrapper;
