'use client';
import { URLSearchParams } from 'url';
import { useSearchParams } from 'next/navigation';

export const useGetParams = () => {
  const formStr = useSearchParams().get('data');
  const formObj = JSON.parse(decodeURIComponent(formStr as string));
  return formObj;
};
