'use client';
import { atom } from 'jotai';

// profile content
export const nameState = atom('');
export const aboutYouState = atom('');
export const profilePicState = atom('');

// social links
export const igLinkState = atom('');
export const twLinkState = atom('');
export const fbLinkState = atom('');
export const ghLinkState = atom('');
export const lnLinkState = atom('');

// projects info
export type projectType = {
  projectName: string;
  projectLink: string;
};
export const projectsState = atom<projectType[]>([]);
export const projectsLenState = atom((get) => get(projectsState).length);

// theme webpage
export const themeState = atom('ss');
export const patternState = atom(false);

//entire state
export type formStateType = {
  name: string;
  profileUrl: string;
  aboutYou: string;
  pattern: boolean;
  theme: string;
  fbLink: string;
  twLink: string;
  ghLink: string;
  igLink: string;
  lnLink: string;
  projects: projectType[];
};
export const formState = atom<formStateType>({
  name: '',
  profileUrl: '',
  aboutYou: '',
  pattern: false,
  theme: '',
  fbLink: '',
  twLink: '',
  ghLink: '',
  igLink: '',
  lnLink: '',
  projects: [],
});
