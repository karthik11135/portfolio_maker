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
import { useGetParams } from '@/hooks/useGetParams';

const Icons = () => {
  const fbLink = useAtomValue(fbLinkState);
  const igLink = useAtomValue(igLinkState);
  const twLink = useAtomValue(twLinkState);
  const ghLink = useAtomValue(ghLinkState);
  const lnLink = useAtomValue(lnLinkState);
  const formObj = useGetParams();

  return (
    <div className="flex gap-3 w-fit mx-auto ">
      {(formObj?.igLink || igLink) && (
        <Link target="_blank" href={formObj?.igLink || igLink}>
          <FaInstagram size={20} />
        </Link>
      )}
      {(formObj?.fbLink || fbLink) && (
        <Link target="_blank" href={formObj?.fbLink || fbLink}>
          <FaFacebook size={20} />
        </Link>
      )}
      {(formObj?.ghLink || ghLink) && (
        <Link target="_blank" href={formObj?.ghLink || ghLink}>
          <FaGithub size={20} />
        </Link>
      )}
      {(formObj?.twLink || twLink) && (
        <Link target="_blank" href={formObj?.twLink || twLink}>
          <FaTwitter size={20} />
        </Link>
      )}
      {(formObj?.lnLink || lnLink) && (
        <Link target="_blank" href={formObj?.lnLink || lnLink}>
          <FaLinkedin size={20} />
        </Link>
      )}
    </div>
  );
};

export default Icons;
