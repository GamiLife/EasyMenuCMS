import { UseQuery } from '@reduxjs/toolkit/dist/query/react/buildHooks';

export interface IUseEditController {
  rtkHook: UseQuery<any>;
  id: string;
}

export const useEditController = ({ rtkHook, id }: IUseEditController) => {
  const { data: response, isFetching, isError, isSuccess } = rtkHook(id);

  const data = (response as any)?.data;

  return { data, isFetching, isError, isSuccess };
};
