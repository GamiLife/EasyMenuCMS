import { Container, Form, Title } from '@gamiui/standard';
import { TFormValues } from '@gamiui/standard/lib/types/hooks/useForm';
import { UseMutation } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import * as React from 'react';
import { ResourceBase } from '../../types';

import * as S from './styles';

export interface IEditRenderForm {
  handleSubmit: (values: any) => void;
  handleValidate: () => void;
  form: TFormValues;
}

export interface IEditBase {
  resourceId: string;
  defaultValue?: Record<string, unknown>;
  resourceType: string;
  rtkHook: UseMutation<any>;
  transform?: (values: any) => any;
  renderForm: (props: IEditRenderForm) => React.ReactNode;
  Resource: new (...args: any[]) => ResourceBase;
  fixedCacheKey?: string;
  baseUrl: string;
}

export const EditBase = ({
  resourceId,
  defaultValue,
  resourceType,
  rtkHook,
  transform,
  renderForm,
  Resource,
  fixedCacheKey,
  baseUrl,
}: IEditBase) => {
  const router = useRouter();
  const [execute, { isLoading, isError, isSuccess }] = rtkHook({
    fixedCacheKey,
  });
  const { form } = Form.useForm({ defaultValue });

  const handleValidate = () => form.validate();

  const handleSubmit = async (values: any) => {
    try {
      const valuesTransformed = transform?.(values) ?? values;

      const request = new Resource({
        ...valuesTransformed,
        id: resourceId,
      }).buildEditRequest();

      await execute(request);

      router.push(baseUrl);
    } catch (error) {}
  };

  return (
    <S.EditBase padding="1rem" className={classNames('categories__new')}>
      <S.HeaderEdit padding="1rem" margin="1rem 0">
        <Title level="h2">Edit {resourceType} that you have!</Title>
      </S.HeaderEdit>

      {renderForm({ handleSubmit, handleValidate, form })}
    </S.EditBase>
  );
};
