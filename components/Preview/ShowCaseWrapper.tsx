'use client';
import React from 'react';
import { useGetParams } from '@/hooks/useGetParams';
import { GridPattern } from '../magicui/grid-pattern';
import { cn } from '@/lib/utils';

const ShowCaseWrapper = ({ children }: { children: React.ReactNode }) => {
  const formObj = useGetParams();
  const themeColor = `bg-gradient-to-b from-${formObj?.theme}-100 to-white h-[100vh] border`;
  //   const vals = ['bg-blue-100', 'bg-pink-100', 'bg-red-200', 'bg-red-100'];

  return (
    <div className={`${formObj ? themeColor : ''}`}>
      {formObj?.pattern && (
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
            'inset-x-0 opacity-70 -z-20 skew-y-12'
          )}
        />
      )}
      {children}
    </div>
  );
};

export default ShowCaseWrapper;
