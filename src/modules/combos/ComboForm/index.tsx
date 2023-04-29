import {
  Form,
  Input,
  TextArea,
  File,
  Number,
  Container,
  Title,
  Row,
  Select,
  Icon,
  Button,
} from '@gamiui/standard';

import { ICreateRenderForm } from '../../../common/resources';
import * as S from '../../../../styles/common/resource-form';
import { useGetDishesQuery } from '../../../api';
import { useState } from 'react';

export type IComboForm = {} & Omit<ICreateRenderForm, 'handleValidate'>;

export const ComboForm = ({ form, handleSubmit }: IComboForm) => {
  const [page, setPage] = useState(0);
  const [searchDish, setSearchDish] = useState();
  const { data, isFetching, isError, isSuccess } = useGetDishesQuery({
    searchBy: `[title,${searchDish}]`,
    searchOp: 'AND',
    companyId: '1',
    page: page + 1,
    sizeByPage: 10,
  });

  return (
    <S.FormContainer form={form} onSubmitForm={handleSubmit}>
      <Form.Item
        rules={[{ type: 'required', message: 'Campo requerido' }]}
        label="Título"
        name="title"
      >
        <Input placeholder="Titulo" width="full" />
      </Form.Item>
      <Form.Item label="Descripcion" name="description">
        <TextArea placeholder="Descripcion" />
      </Form.Item>
      <Form.Item
        rules={[{ type: 'required', message: 'Campo requerido' }]}
        label="Max Items in this combo"
        name="maxItems"
      >
        <Number placeholder="Max Items" width="full" />
      </Form.Item>

      <Container>
        <Title>Sauces Combo Detail</Title>

        <Form.List
          label="Sauces Combo Detail"
          name="dishesDetail"
          schema={[
            'id',
            'maxItemsByRow',
            'priceByUnit',
            'dishId',
            'dishName',
            'dishImage',
          ]}
        >
          {(fieldList, add, remove) => (
            <Container>
              <Container>
                {fieldList.map(({ name }) => (
                  <Row key={name} isWrap={false} gap="1rem" alignItems="center">
                    <Form.List.Item
                      name="maxItemsByRow"
                      fieldItemName={name}
                      fieldListName="dishesDetail"
                      onChange={() => {}}
                    >
                      <Number placeholder="Max Items" width="full" />
                    </Form.List.Item>
                    <Form.List.Item
                      name="priceByUnit"
                      fieldItemName={name}
                      fieldListName="dishesDetail"
                    >
                      <Number placeholder="Price by Unit" width="full" />
                    </Form.List.Item>
                    <Form.List.Item
                      name="dishId"
                      fieldItemName={name}
                      fieldListName="dishesDetail"
                    >
                      <Select />
                    </Form.List.Item>
                    <Form.List.Item
                      name="phone"
                      fieldItemName={name}
                      fieldListName="dishesDetail"
                    >
                      <Input placeholder="Phone" />
                    </Form.List.Item>
                    <Container>
                      <Icon
                        name="delete"
                        onClick={() => {
                          remove(name);
                        }}
                      />
                    </Container>
                  </Row>
                ))}
              </Container>
              {
                <Container>
                  <Button onClick={() => add()}>Add new Item</Button>
                </Container>
              }
            </Container>
          )}
        </Form.List>
      </Container>
    </S.FormContainer>
  );
};
