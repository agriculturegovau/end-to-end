import React from 'react';
import Image, { ImageLoaderProps, ImageProps } from 'next/image';

const isProd = process.env.NODE_ENV === 'production';

const StaticLoader = (props: ImageLoaderProps) => props.src;

const StaticImage: typeof Image = ({ loader = StaticLoader, ...props }: ImageProps) => {
  const src = isProd ? `/end-to-end${props.src}` : props.src;

  return <Image unoptimized {...props} loader={loader} src={src} />;
};

export default StaticImage;
