import { nanoid } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer/dist/internal';
import { IAction, ICategory } from '../slice/categorySlice';

export interface IAddCategory {
  title: string;
}

export const categoryReducer = {
  addCategory: {
    reducer: (state: WritableDraft<ICategory>[], action: IAction) => {
      state.push(action.payload);
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
