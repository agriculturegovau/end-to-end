import React from 'react';
import Image, { ImageLoaderProps, ImageProps } from 'next/image';

const isProd = process.env.NODE_ENV === 'production';

export const imageURL = (src: string) => (isProd ? `/end-to-end${src}` : src);

const StaticLoader = (props: ImageLoaderProps) => props.src;

const StaticImage: typeof Image = ({ loader = StaticLoader, ...props }: ImageProps) => {
  const src = isProd ? `/end-to-end${props.src}` : props.src;

  return <Image unoptimized {...props} loader={loader} src={src} />;
};

export default StaticImage;
