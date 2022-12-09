import styled from '@emotion/styled';
import { Container, Layout } from '@gamiui/standard';
import { lightTheme } from '../../../../styles/design-system/theme';

export const Content = styled(Layout.Content)`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const LayoutHeader = styled(Layout.Header)`
  box-shadow: 0px 2px 8px 0px rgb(0 0 0 / 5%);
  z-index: 1;
`;

export const Body = styled(Container)`
  background-color: ${lightTheme.primary.second};
  height: 100%;
  border-radius: 0.6em;
`;

export const BreadCrumb = styled(Container)`
  display: flex;
  gap: 1rem;
`;

export const BreadCrumbItem = styled(Container)`
  display: flex;
  gap: 0.4rem;

  font-size: 12px;
`;

export const BreadCrumArrow = styled(Container)`
  display: flex;
  align-items: flex-end;
`;
