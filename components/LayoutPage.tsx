import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import React from 'react';

export type LayoutPage = NextPage & {
  getLayout?: React.FC;
};

export type LayoutPageProps = AppProps & {
  Component: LayoutPage;
};
