import { Form, Title } from "@gamiui/standard";
import { TFormValues } from "@gamiui/standard/lib/types/hooks/useForm";
import { UseMutation } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import classNames from "classnames";
import { useRouter } from "next/router";
import * as React from "react";
import { ResourceBase } from "../../types";

import * as S from "./styles";

export type ICreateRenderForm = {
  handleSubmit: (values: any) => void;
  handleValidate: () => void;
  form: TFormValues;
};

export interface ICreateBase {
  resourceType: string;
  rtkHook: UseMutation<any>;
  transform?: (values: any) => any;
  renderForm: (props: ICreateRenderForm) => React.ReactNode;
  Resource: new (...args: any[]) => ResourceBase;
  fixedCacheKey?: string;
  baseUrl: string;
}

export const CreateBase = ({
  resourceType,
  rtkHook,
  transform,
  renderForm,
  Resource,
  fixedCacheKey,
  baseUrl,
}: ICreateBase) => {
  const companyId = 1;
  const router = useRouter();
  const [execute, { isLoading, isError, isSuccess }] = rtkHook({
    fixedCacheKey,
  });
  const { form } = Form.useForm({});

  const handleValidate = () => form.validate();

  const handleSubmit = async (values: any) => {
    try {
      const valuesTransformed = transform?.(values) ?? values;
      const request = new Resource(valuesTransformed).buildCreateRequest();

      await execute(request);

      router.push(baseUrl);
    } catch (error) {}
  };

  return (
    <S.CreateBase padding="1rem" className={classNames("categories__new")}>
      <S.HeaderCreate padding="1rem" margin="1rem 0">
        <Title level="h2">
          Create new {resourceType} that you want to have!
        </Title>
      </S.HeaderCreate>

      {renderForm({ handleSubmit, handleValidate, form })}
    </S.CreateBase>
  );
};
