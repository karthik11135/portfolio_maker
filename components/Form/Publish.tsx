'use client';
import React from 'react';
import { useState } from 'react';
import { useSetAtom, useAtomValue, useAtom } from 'jotai';
import Link from 'next/link';
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
  modelState,
  linkState,
} from '../common/store/atoms';
import { FaGithub } from 'react-icons/fa';

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

  const setLinkEnd = useSetAtom(linkState);
  const setOpen = useSetAtom(modelState);

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

    const encoded = encodeURIComponent(JSON.stringify(formValues));
    setLinkEnd('http://localhost:3000/portfolio?data=' + encoded);
  };

  return (
    <div
      onClick={publishHandler}
      className="grid grid-cols-12 mx-2 md:mx-0 py-3 gap-2 text-center"
    >
      <button
        onClick={() => setOpen(true)}
        className="block bg-black rounded-lg col-span-8  text-white me-3 font-black "
      >
        Publish
      </button>
      <Link
        target="_blank"
        href="https://github.com/karthik11135/portfolio_maker"
        className="block text-center bg-black py-3 col-span-4 rounded-lg text-white me-3 font-black "
      >
        <FaGithub size={30} className="w-fit mx-auto" />
      </Link>
    </div>
  );
};

export default Publish;
