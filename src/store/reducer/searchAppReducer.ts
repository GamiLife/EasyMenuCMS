import { WritableDraft } from 'immer/dist/internal';
import { IAction } from '../slice';

export type TSearchInitialState<T> = {
  currentPage: number;
  itemsPerPage: number;
  search: string;
  items: T[];
};

export const searchAppReducer = {
  updateSearch: (state: WritableDraft<any>, action: IAction) => {
    state.search = action.payload;
  },

  updateCurrentPage: (state: WritableDraft<any>, action: IAction) => {
    state.currentPage = action.payload;
  },

  updateItemsPerPage: (state: WritableDraft<any>, action: IAction) => {
    state.itemsPerPage = action.payload;
  },
};
