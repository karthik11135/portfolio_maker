'use client';
import React from 'react';
import { useAtom } from 'jotai';
import { patternState, themeState } from '../common/store/atoms';

const tempStore = [
  { name: 'No Color', tsName: 'ss' },
  { name: 'Light Blue', tsName: 'blue' },
  { name: 'Crimson Red', tsName: 'red' },
  { name: 'Pale Pink', tsName: 'pink' },
  { name: 'Zinc', tsName: 'zinc' },
];

const ThemeInfo = () => {
  const [theme, setTheme] = useAtom(themeState);
  const [pattern, setPattern] = useAtom(patternState);

  const changeThemeHandler = (id: number) => {
    tempStore[id].tsName;
    setTheme(tempStore[id].tsName);
  };

  return (
    <div className="mb-2 border border-zinc-300 mx-2 md:mx-0 py-7 px-5 rounded-lg">
      <div className="flex gap-3 items-center">
        <h1 className="font-bold text-lg md:text-2xl mb-0.5 tracking-tight">
          Theme Selector
        </h1>
        <div>
          <button
            onClick={() => setPattern((prev) => !prev)}
            className={`${
              pattern ? 'bg-slate-100' : ''
            } px-3 border rounded-full text-sm`}
          >
            Boxes
          </button>
        </div>
      </div>
      <p className="text-slate-700 font-extralight mb-3 trackin text-sm">
        Select your favorite theme
      </p>
      <div className="flex gap-2 overflow-x-scroll">
        {tempStore.map((val, id) => {
          return (
            <div
              key={id}
              onClick={() => changeThemeHandler(id)}
              className={`${
                theme == val.tsName ? 'bg-slate-100' : ''
              } text-center hover:bg-slate-100 cursor-pointer px-5 border py-5 rounded-md`}
            >
              {val.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ThemeInfo;
