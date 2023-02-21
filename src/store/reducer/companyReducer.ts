import { WritableDraft } from 'immer/dist/internal';
import { IAction, ICompanyInitialState } from '../slice';

export type ICompanyDetailsAction = ICompanyInitialState;

export const companyReducer = {
  updateCompanyDetails: (
    state: WritableDraft<ICompanyInitialState>,
    action: IAction<ICompanyDetailsAction>
  ) => {
    const { payload } = action;

    state.id = payload.id;
    state.name = payload.name;
    state.description = payload.description;
    state.slugUrl = payload.slugUrl;
  },
};
