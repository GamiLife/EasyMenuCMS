import styled from '@emotion/styled';
import { Container, Form } from '@gamiui/standard';

export const CategoryForm = styled(Container)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FormContainer = styled(Form)`
  justify-content: flex-start;
`;

export const FooterItemContainer = styled(Container)`
  max-width: 400px;
  width: 30%;

  a {
    width: 100%;
  }
`;

export const FormFooter = styled(Container)`
  display: flex;
  justify-content: space-between;
`;
