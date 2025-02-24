import React from 'react';
import Iphone from './Iphone';
import PreviewWrapper from './PreviewWrapper';
import ShowCase from './ShowCase';

const Preview = () => {
  return (
    <PreviewWrapper>
      <ShowCase />
      <Iphone />
    </PreviewWrapper>
  );
};

export default Preview;
