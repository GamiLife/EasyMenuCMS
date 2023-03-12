import styled from '@emotion/styled';
import { Container, Title } from '@gamiui/standard';

import { lightTheme } from '../../../styles/design-system/theme';

export const SiteEditor = styled(Container)`
  gap: 1rem;
`;

export const SiteEditorFrame = styled.iframe`
  border: none;
  min-height: 100vh;
  width: 100%;
`;

export const SiteEditorMenu = styled(Container)`
  background-color: white;
  min-width: 250px;
  padding: 1rem 0;
`;

export const SiteEditorTitle = styled(Title)`
  border-bottom: 1px solid #e9e6e6;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  padding-left: 5px;
  padding-right: 5px;
`;

export const SiteTitle = styled(Title)`
  margin-bottom: 2rem;
  margin-top: 2rem;
`;

export const SiteContent = styled(Container)`
  height: 100%;
`;

export const SiteBlock = styled(Container)`
  border: 1px solid #e9e6e6;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

export const SiteEditorFooter = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SiteEditorToolbar = styled(Container)``;

export const Toolbar = styled.ul`
  column-gap: 10px;
  display: flex;
  margin-right: 10px;
`;

export const ToolbarItem = styled.li`
  align-items: center;
  background-color: ${lightTheme.primary.white};
  border-radius: 0.4em;
  display: flex;
  height: 30px;
  justify-content: center;
  width: 30px;
  &:hover {
    cursor: pointer;
  }

  &.selected {
    border: 2px solid ${lightTheme.primary.mediumPurple};
  }
`;

export const SiteEditorScreen = styled(Container)`
  background-color: ${lightTheme.primary.second};
`;
