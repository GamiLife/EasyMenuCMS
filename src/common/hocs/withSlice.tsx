/* eslint-disable react/display-name */

import { Slice } from '@reduxjs/toolkit';
import SliceProvider from '../../context/SliceProvider';

export const withSlice =
  (Component: any) => (props: Record<string, unknown>) => {
    return (
      <SliceProvider slice={props.slice as Slice}>
        <Component {...props} />;
      </SliceProvider>
    );
  };
