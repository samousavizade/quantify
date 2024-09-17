import NextImage, { ImageProps } from 'next/image';
import React from 'react';

const Image = ({ ...rest }: ImageProps) => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <NextImage {...rest} />
  </div>
);

export default Image;
