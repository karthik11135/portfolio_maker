import React from 'react';
import FormField from './FormField';
import {
  fbLinkState,
  ghLinkState,
  igLinkState,
  lnLinkState,
  twLinkState,
} from '../common/store/atoms';

const SocialInfo = () => {
  return (
    <div className="mb-2 border border-zinc-300 mx-2 md:mx-0 py-7 px-5 rounded-lg">
      <h1 className="font-bold text-lg md:text-2xl mb-0.5 tracking-tight">Social Links</h1>
      <p className="text-slate-700 font-extralight mb-3 trackin text-sm">
        Enter your social links for quick access
      </p>
      <div className="md:grid md:grid-cols-2">
        <FormField
          name="Facbook"
          placeHolderVal="https://facebook.com/cena"
          className="col-span-1"
          stateVal={fbLinkState}
        />
        <FormField
          name="Twitter"
          placeHolderVal="https://x.com/cena"
          className="col-span-1"
          stateVal={twLinkState}
        />
        <FormField
          name="Github"
          placeHolderVal="https://github.com/cena"
          className="col-span-1"
          stateVal={ghLinkState}
        />
        <FormField
          name="LinkedIn"
          placeHolderVal="https://linkedin.com/in/cena"
          className="col-span-1"
          stateVal={lnLinkState}
        />
        <FormField
          name="Instagram"
          placeHolderVal="https://instagram.com/cena"
          className="col-span-1"
          stateVal={igLinkState}
        />
      </div>
    </div>
  );
};

export default SocialInfo;
