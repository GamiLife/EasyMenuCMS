/* eslint-disable react/display-name */

import { Slice } from '@reduxjs/toolkit';
import SliceProvider from '../../context/SliceProvider';
import { useState } from 'react';

export const withSlice =
  (Component: any) => (props: Record<string, unknown>) => {
    const [] = useState()
    return (
      <SliceProvider slice={props.slice as Slice}>
        <Component {...props} />;
      </SliceProvider>
    );
  };
