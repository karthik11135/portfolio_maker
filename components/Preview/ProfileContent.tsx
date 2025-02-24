'use client';
import React from 'react';
import {  useAtomValue } from 'jotai';
import {
  aboutYouState,
  nameState,
  profilePicState,
} from '../common/store/atoms';

import { useGetParams } from '@/hooks/useGetParams';

const ProfileContent = () => {
  const formObj = useGetParams();
  const nameValue = useAtomValue(nameState);
  const aboutYouVal = useAtomValue(aboutYouState);
  const profilePicVal = useAtomValue(profilePicState);

  return (
    <>
      <input
        id="profilepic"
        className="border-none focus:outline-none rounded-full"
        width={55}
        height={55}
        type="image"
        src={
          profilePicVal == ''
            ? '/np.webp'
            : formObj?.profileUrl || profilePicVal
        }
      />
      <h1 className="font-bold z-10 tracking-tight mb-1 text-3xl">
        {formObj?.name || nameValue}
      </h1>
      <p className="font-extralight z-10 text-md tracking-tighter">
        {formObj?.aboutYou || aboutYouVal}
      </p>
    </>
  );
};

export default ProfileContent;
