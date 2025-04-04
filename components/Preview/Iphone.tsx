'use client';
import React from 'react';
import { useGetParams } from '@/hooks/useGetParams';

const Iphone = () => {
  const formObj = useGetParams();

  if (formObj) return;

  return (
    <div>
      <div className=" lg:w-28 md:w-20 w-16 bg-black h-7 rounded-full absolute top-3 left-1/2 -translate-x-1/2 bg"></div>
      <div className=" lg:w-32 md:w-14 w-18 h-2 rounded-full absolute bottom-1 left-1/2 -translate-x-1/2 bg-neutral-200"></div>
      <div className="h-16 w-3 absolute -left-4 top-28 bg-black rounded-md"></div>
      <div className="h-16 w-3 absolute -left-4 top-44 bg-black rounded-md"></div>
      <div className="h-24 w-4 absolute -right-4 top-36 bg-black rounded-lg"></div>
    </div>
  );
};

export default Iphone;
