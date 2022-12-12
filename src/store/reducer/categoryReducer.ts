import { nanoid } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer/dist/internal';
import { IAction, TCategoryState } from '../slice/categorySlice';
import { searchAppReducer } from './searchAppReducer';

export interface IAddCategory {
  title: string;
}

export const categoryReducer = {
  ...searchAppReducer,
  create: {
    reducer: (state: WritableDraft<TCategoryState>, action: IAction) => {
      state.items.push(action.payload);
    },
    prepare: ({ title }: IAddCategory) => {
      return {
        payload: {
          id: nanoid(),
          title,
        },
      };
    },
  },
};
