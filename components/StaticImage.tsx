import React from 'react';
import Image, { ImageLoaderProps, ImageProps } from 'next/image';

const staticLoader = (props: ImageLoaderProps) => {
  console.log('loader props', { props });
  return props.src;
};

const StaticImage: typeof Image = ({ loader = staticLoader, ...props }: ImageProps) => {
  console.log('image props', { props });

  <Image unoptimized loader={loader} {...props} />;
};

export default StaticImage;
