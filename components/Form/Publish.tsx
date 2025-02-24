'use client';
import React from 'react';
import { useSetAtom, useAtomValue, useAtom } from 'jotai';
import {
  formState,
  nameState,
  profilePicState,
  aboutYouState,
  fbLinkState,
  twLinkState,
  lnLinkState,
  ghLinkState,
  igLinkState,
  patternState,
  themeState,
  projectsState,
} from '../common/store/atoms';

const Publish = () => {
  const setFormState = useSetAtom(formState);
  const name = useAtomValue(nameState);
  const profileUrl = useAtomValue(profilePicState);
  const aboutYou = useAtomValue(aboutYouState);
  const pattern = useAtomValue(patternState);
  const theme = useAtomValue(themeState);
  const fbLink = useAtomValue(fbLinkState);
  const twLink = useAtomValue(twLinkState);
  const ghLink = useAtomValue(ghLinkState);
  const igLink = useAtomValue(igLinkState);
  const lnLink = useAtomValue(lnLinkState);
  const projects = useAtomValue(projectsState);

  const publishHandler = async () => {
    const formValues = {
      name,
      profileUrl,
      aboutYou,
      pattern,
      theme,
      fbLink,
      twLink,
      ghLink,
      igLink,
      lnLink,
      projects,
    };
    setFormState(formValues);
    console.log('formStateType', formValues);

    const encoded = encodeURIComponent(JSON.stringify(formValues));
    console.log('http://localhost:3000/portfolio?data=' +encodeURIComponent(JSON.stringify(formValues)));

  };

  return (
    <div
      onClick={publishHandler}
      className="bg-slate-800 cursor-pointer rounded-lg py-3 gap-2 text-center"
    >
      <button className="inline text-white me-3 font-black ">Publish</button>
    </div>
  );
};

export default Publish;
