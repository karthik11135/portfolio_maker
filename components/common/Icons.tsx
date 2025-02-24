'use client';
import React from 'react';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

import { useAtomValue } from 'jotai';
import {
  fbLinkState,
  igLinkState,
  ghLinkState,
  twLinkState,
  lnLinkState,
} from './store/atoms';
import Link from 'next/link';

const Icons = () => {
  const fbLink = useAtomValue(fbLinkState);
  const igLink = useAtomValue(igLinkState);
  const twLink = useAtomValue(twLinkState);
  const ghLink = useAtomValue(ghLinkState);
  const lnLink = useAtomValue(lnLinkState);

  return (
    <div className="flex gap-3 w-fit mx-auto ">
      {igLink && (
        <Link target="_blank" href={igLink}>
          <FaInstagram size={20} />
        </Link>
      )}
      {fbLink && (
        <Link target="_blank" href={fbLink}>
          <FaFacebook size={20} />
        </Link>
      )}
      {ghLink && (
        <Link target="_blank" href={ghLink}>
          <FaGithub size={20} />
        </Link>
      )}
      {twLink && (
        <Link target="_blank" href={twLink}>
          <FaTwitter size={20} />
        </Link>
      )}
      {lnLink && (
        <Link target="_blank" href={lnLink}>
          <FaLinkedin size={20} />
        </Link>
      )}
    </div>
  );
};

export default Icons;
