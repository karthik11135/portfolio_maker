'use client';
import React from 'react';
import Link from 'next/link';
import { RxCross1 } from 'react-icons/rx';
import { useAtom } from 'jotai';
import { linkState, modelState } from './store/atoms';
import { useAtomValue } from 'jotai';

export const Modal = () => {
  const [open, setOpen] = useAtom(modelState);
  const link = useAtomValue(linkState);

  if (!open) return;

  return (
    <div className="py-10 px-10 border rounded-lg top-[50%] fixed left-[50%] -translate-x-1/2 z-20 shadow-lg bg-white -translate-y-1/2">
      <h1 className="font-bold tracking-tight mb-5">Published❗️❗️❗️</h1>
      <Link
        target="_blank"
        className="border rounded-lg py-0.5 px-4"
        href={link}
      >
        Lets go
      </Link>
      <div
        className="absolute right-2 top-2 cursor-pointer"
        onClick={() => setOpen(false)}
      >
        <RxCross1 />
      </div>
    </div>
  );
};
