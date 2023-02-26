import styled from '@emotion/styled';
import { Container, Title } from '@gamiui/standard';
import { lightTheme } from '../../../styles/design-system/theme';

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
  padding: 1rem 0;
  min-width: 250px;
`;

export const SiteEditorTitle = styled(Title)`
  border-bottom: 1px solid #e9e6e6;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  padding-left: 5px;
  padding-right: 5px;
`;

export const SiteTitle = styled(Title)`
  margin-top: 2rem;
  margin-bottom: 2rem;
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
  background-color: white;
  border-radius: 0.4em;
`;

export const ToolbarItem = styled.li`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.4em;

  &:hover {
    cursor: pointer;
  }

  &.selected {
    border: 2px solid ${lightTheme.primary.mediumPurple};
  }
`;
