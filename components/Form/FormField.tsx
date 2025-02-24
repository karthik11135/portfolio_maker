'use client';
import React from 'react';
import { useAtom, useSetAtom } from 'jotai';
import { nameState, projectType } from '../common/store/atoms';
import { PrimitiveAtom } from 'jotai';
import { projectsState } from '../common/store/atoms';
import { useState } from 'react';

const FormField = ({
  name,
  className,
  stateVal,
  placeHolderVal,
  lines,
  projVal,
  id,
}: {
  name: string;
  className: string;
  stateVal: PrimitiveAtom<string> | PrimitiveAtom<projectType[]>;
  placeHolderVal: string;
  lines?: number;
  projVal?: projectType;
  id?: number;
}) => {
  const [projectsValue, setVal] = useAtom(stateVal);
  const [counter, setCounter] = useState(0);

  ('rendered');
  const fieldChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (stateVal == projectsState) {
      if (id == undefined) return;
      let newProjVals = [...projectsValue];
      if (name == 'Project Name')
        (newProjVals[id] as projectType)['projectName'] = e.target.value;
      else (newProjVals[id] as projectType)['projectLink'] = e.target.value;
      setVal(newProjVals as projectType[]);
    } else setVal(e.target.value);
  };

  return (
    <div className={`${className} my-1 me-2`}>
      <div>
        <label className="font-medium tracking-tight text-sm ">{name}</label>{' '}
        <br />
        <div className='flex'>

        <textarea
          placeholder={placeHolderVal}
          onInput={fieldChangeHandler}
          value={
            name == 'Project Name'
              ? (projectsValue[id as number] as projectType)['projectName']
              : name == 'Project Link'
              ? (projectsValue[id as number] as projectType)['projectLink']
              : undefined
          }
          className="focus:outline-none border-zinc-300 placeholder:font-light placeholder:text-zinc-400 flex-grow border rounded-md py-1.5 px-2 text-black font-extralight placeholder:t-300"
          rows={lines ? lines : 1}
        />
        </div>
      </div>
    </div>
  );
};

export default FormField;
