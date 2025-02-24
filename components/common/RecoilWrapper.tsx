'use client';
import { RecoilRoot } from 'recoil';

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
