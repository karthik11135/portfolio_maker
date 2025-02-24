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
export const projectsState = atom<projectType[]>([
 
]);
export const projectsLenState = atom((get) => get(projectsState).length);
