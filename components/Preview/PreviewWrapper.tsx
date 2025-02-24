'use client';
import React from 'react';
import { useAtomValue } from 'jotai';
import { patternState, themeState } from '../common/store/atoms';
import { GridPattern } from '../magicui/grid-pattern';
import { cn } from '@/lib/utils';

const PreviewWrapper = ({ children }: { children: React.ReactNode }) => {
  const themeVal = useAtomValue(themeState);
  const pattern = useAtomValue(patternState);
  //   const vals = ['bg-blue-100', 'bg-pink-100', 'bg-red-200', 'bg-red-100'];

  return (
    <div
      className={` w-[330px] bg-gradient-to-b from-${themeVal}-100 -z-10 to-white mx-auto h-[80vh] mt-16 relative border-[12px] pb-1 border-black rounded-[2.8rem]`}
    >
      {pattern && (
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
            '[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]',
            'inset-x-0 opacity-70 -z-20 h-[100%] skew-y-12'
          )}
        />
      )}
      {children}
    </div>
  );
};

export default PreviewWrapper;
