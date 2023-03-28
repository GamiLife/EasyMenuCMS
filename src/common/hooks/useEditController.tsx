import { UseQuery } from '@reduxjs/toolkit/dist/query/react/buildHooks';

export interface IUseEditController {
  rtkHook: UseQuery<any>;
  id?: string;
  rtkProps?: any;
}

export const useEditController = ({
  rtkHook,
  id,
  rtkProps,
}: IUseEditController) => {
  const {
    data: response,
    isFetching,
    isError,
    isSuccess,
  } = rtkHook(rtkProps ?? id);

  const data = (response as any)?.data;

  return { data, isFetching, isError, isSuccess };
};
