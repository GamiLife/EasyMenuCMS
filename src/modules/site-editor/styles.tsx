import styled from '@emotion/styled';
import { Container, Title } from '@gamiui/standard';

export const SiteEditor = styled(Container)`
  gap: 1rem;
`;

export const SiteEditorFrame = styled.iframe`
  width: 100%;
  border: none;
  min-height: 100vh;
`;

export const SiteEditorMenu = styled(Container)`
  background-color: white;
  padding: 1rem;
  min-width: 200px;
`;

export const SiteEditorTitle = styled(Title)`
  border-bottom: 1px solid darkgray;
  padding-bottom: 5px;
`;
export const SiteTitle = styled(Title)`
  margin-bottom: 2rem;
  text-decoration: underline;
  text-underline-offset: 5px;
`;
