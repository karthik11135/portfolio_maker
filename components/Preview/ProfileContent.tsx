'use client';
import React from 'react';
import { useAtom, useAtomValue } from 'jotai';
import {
  aboutYouState,
  nameState,
  profilePicState,
} from '../common/store/atoms';

const ProfileContent = () => {
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
        src={profilePicVal == '' ? '/np.webp' : profilePicVal}
      />
      <h1 className="font-bold tracking-tight mb-1 text-3xl">{nameValue}</h1>
      <p className="font-extralight text-md tracking-tighter">{aboutYouVal}</p>
    </>
  );
};

export default ProfileContent;
