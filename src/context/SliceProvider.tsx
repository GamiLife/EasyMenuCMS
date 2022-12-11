import { Slice } from '@reduxjs/toolkit';
import { createContext, useContext } from 'react';
import { useSelector } from 'react-redux';
import { categorySlice } from '../store';

type ISliceContext = Slice<any>;

interface ISliceProvider {
  slice: ISliceContext;
  children: React.ReactNode;
}

const SliceContext = createContext<ISliceContext>(categorySlice);

const SliceProvider = ({ slice, children }: ISliceProvider) => (
  <SliceContext.Provider value={slice}>{children}</SliceContext.Provider>
);

const useSliceActions = () => useContext(SliceContext).actions;

const useSliceSelector = () => {
  const name = useContext(SliceContext)?.name;
  return useSelector((state: any) => {
    if (!name) {
      return {};
    }

    return state[name];
  });
};

export default SliceProvider;
export { useSliceActions, useSliceSelector };
