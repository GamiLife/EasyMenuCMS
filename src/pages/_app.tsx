import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeGamification } from '@gamiui/standard';
import { NextUIProvider } from '@nextui-org/react';
import React from 'react';
import { NextComponentType, NextPageContext } from 'next';

type TComponent = NextComponentType<NextPageContext, any, any> & {
  getLayout: (children: React.ReactNode) => React.ReactNode;
};

export default function App({ Component, pageProps }: AppProps) {
  const getLayout =
    (Component as TComponent).getLayout ||
    ((children: React.ReactNode) => children);

  return (
      <ThemeGamification>
        {getLayout(<Component {...pageProps} />)}
      </ThemeGamification>
  );
}
