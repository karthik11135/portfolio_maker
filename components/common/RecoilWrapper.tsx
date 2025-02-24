'use client';
import { RecoilRoot } from 'recoil';
import { Suspense } from 'react';

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <RecoilRoot>
      <Suspense>{children}</Suspense>
    </RecoilRoot>
  );
};
