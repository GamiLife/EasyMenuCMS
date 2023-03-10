import {
  Button,
  Container,
  Form,
  Icon,
  Input,
  Row,
  Select,
  TextArea,
  File,
} from '@gamiui/standard';
import { useState } from 'react';
import * as S from '../../../../styles/common/resource-form';
import { ICreateRenderForm } from '../../../common/resources';
import * as OwnS from './styles';

export type ICompanyForm = {} & Omit<ICreateRenderForm, 'handleValidate'>;

export const options = [
  {
    value: '1',
    label: (
      <Container
        style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}
      >
        <Container
          rounded="full"
          padding="0.5rem"
          style={{ background: 'white' }}
        >
          <Icon name="tiktok" />
        </Container>
        Tiktok
      </Container>
    ),
  },
  {
    value: '3',
    label: (
      <Container
        style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}
      >
        <Container
          rounded="full"
          padding="0.5rem"
          style={{ background: 'white' }}
        >
          <Icon name="whatsapp" />
        </Container>
        Whatsapp
      </Container>
    ),
  },
  {
    value: '4',
    label: (
      <Container
        style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}
      >
        <Container
          rounded="full"
          padding="0.5rem"
          style={{ background: 'white' }}
        >
          <Icon name="instagram" />
        </Container>
        Instagram
      </Container>
    ),
  },
  {
    value: '2',
    label: (
      <Container
        style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}
      >
        <Container
          rounded="full"
          padding="0.5rem"
          style={{ background: 'white' }}
        >
          <Icon name="facebook" />
        </Container>
        Facebook
      </Container>
    ),
  },
];

export const CompanyForm = ({ form, handleSubmit }: ICompanyForm) => {
  const defaultSocials = () => {
    const defaultValue = (form.value?.socialNetworks as any[])?.reduce(
      (acc, social, index) => {
        return {
          [social?.socialNetworkId?.value]: `socialNetworks_${index}`,
          ...acc,
        };
      },
      {}
    );

    return defaultValue ?? {};
  };
  const defaultValue = defaultSocials();
  const [socialsSelected, setSocialsSelected] =
    useState<Record<string, string>>(defaultValue);

  const getOptions = (name: string) => {
    const optionsModified = options.filter((option) => {
      const { value } = option;
      const fieldIndexPicked = socialsSelected?.[value];

      if (fieldIndexPicked === undefined) return true;
      return fieldIndexPicked === name;
    });

    return optionsModified;
  };

  const handleRemove = (name: string) => {
    let index = 0;
    const socialsSelectedModified = Object.entries(socialsSelected).reduce(
      (acc, [key, value], currentIndex) => {
        if (value === name) {
          index = 1;
          return acc;
        }
        return {
          ...acc,
          [key]: `socialNetworks_${currentIndex - index}`,
        };
      },
      {}
    );
    setSocialsSelected(socialsSelectedModified);
  };

  const handleChangeSocialNetwork = (valueSelected: any, name: string) => {
    if (!valueSelected) return;
    const socialsSelectedModified = Object.entries(socialsSelected).reduce(
      (acc, [key, value]) => {
        if (value === name) return acc;
        return { ...acc, [key]: value };
      },
      {}
    );
    setSocialsSelected({
      ...socialsSelectedModified,
      [valueSelected.value]: name,
    });
  };

  return (
    <S.FormContainer form={form} onSubmitForm={handleSubmit}>
      <Form.Item
        rules={[{ type: 'required', message: 'Campo requerido' }]}
        label="Nombre"
        name="name"
      >
        <Input placeholder="Nombre de la empresa" width="full" />
      </Form.Item>
      <Form.Item
        rules={[{ type: 'required', message: 'Campo requerido' }]}
        label="Descripcion"
        name="description"
      >
        <TextArea placeholder="Descripcion" />
      </Form.Item>
      <Form.Item
        rules={[{ type: 'required', message: 'Campo requerido' }]}
        label="Slug"
        name="slugUrl"
      >
        <Input placeholder="Slug" width="full" readOnly />
      </Form.Item>
      <Container width="full">
        <OwnS.BrandTitle level="h4">MARCA:</OwnS.BrandTitle>
        <Form.Item
          rules={[{ type: 'required', message: 'Campo requerido' }]}
          label="Meta Title"
          name="metaTitle"
        >
          <Input placeholder="Meta Title" width="full" />
        </Form.Item>
        <Form.Item
          rules={[{ type: 'required', message: 'Campo requerido' }]}
          label="Meta Description"
          name="metaDescription"
        >
          <Input placeholder="Meta Description" width="full" />
        </Form.Item>
      </Container>
      <Container width="full">
        <OwnS.BrandTitle level="h4">REDES SOCIALES:</OwnS.BrandTitle>

        <Form.List
          label="Social Networks"
          name="socialNetworks"
          schema={['name', 'user', 'country-code', 'phone']}
        >
          {(fieldList, add, remove) => (
            <Container>
              <Container>
                {fieldList.map(({ name }) => (
                  <Row key={name} isWrap={false} gap="1rem" alignItems="center">
                    <Form.List.Item
                      name="socialNetworkId"
                      fieldItemName={name}
                      fieldListName="socialNetworks"
                      onChange={(valueSelected) => {
                        handleChangeSocialNetwork(valueSelected, name);
                      }}
                    >
                      <Select
                        placeholder="Type your option"
                        options={getOptions(name)}
                      />
                    </Form.List.Item>
                    <Form.List.Item
                      name="user"
                      fieldItemName={name}
                      fieldListName="socialNetworks"
                    >
                      <Input placeholder="User" />
                    </Form.List.Item>
                    <Form.List.Item
                      name="countryCode"
                      fieldItemName={name}
                      fieldListName="socialNetworks"
                    >
                      <Input placeholder="Country Code" />
                    </Form.List.Item>
                    <Form.List.Item
                      name="phone"
                      fieldItemName={name}
                      fieldListName="socialNetworks"
                    >
                      <Input placeholder="Phone" />
                    </Form.List.Item>
                    <Container>
                      <Icon
                        name="delete"
                        onClick={() => {
                          handleRemove(name);
                          remove(name);
                        }}
                      />
                    </Container>
                  </Row>
                ))}
              </Container>
              {fieldList.length < options.length && (
                <Container>
                  <Button onClick={() => add()}>Add new Item</Button>
                </Container>
              )}
            </Container>
          )}
        </Form.List>
      </Container>
    </S.FormContainer>
  );
};
