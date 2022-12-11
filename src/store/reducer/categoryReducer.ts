import { nanoid } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer/dist/internal';
import { searchAppReducer } from '.';
import { IAction, TCategoryState } from '../slice/categorySlice';

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
