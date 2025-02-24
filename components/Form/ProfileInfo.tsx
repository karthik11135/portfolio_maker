import React from 'react';
import FormField from './FormField';
import {
  nameState,
  profilePicState,
  aboutYouState,
} from '../common/store/atoms';

const ProfileInfo = () => {
  return (
    <div className="mb-2 border border-zinc-300 py-7 px-5 rounded-lg">
      <h1 className="font-bold text-2xl mb-0.5 tracking-tight">Profile Info</h1>
      <p className="text-slate-700 font-extralight mb-3 trackin text-sm">
        Enter your profile details here
      </p>
      <div className="grid grid-cols-2">
        <FormField
          className="col-span-1"
          name="Name"
          stateVal={nameState}
          placeHolderVal="John Cena"
        />
        <FormField
          className="col-span-1"
          name="Profile url"
          placeHolderVal="https://example.com"
          stateVal={profilePicState}
        />
        <FormField
          className="col-span-2"
          lines={3}
          name="About yourself"
          placeHolderVal="https://example.com"
          stateVal={aboutYouState}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
