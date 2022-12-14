import styled from '@emotion/styled';
import { Container } from '@gamiui/standard';
import { lightTheme } from '../../../../styles/design-system/theme';

export const Sidebar = styled(Container)`
  min-width: 200px;
  background-color: ${lightTheme.primary.mediumPurple};
  color: white;

  border-top-right-radius: 2em;
  height: 100%;

  margin-top: 1rem;
`;

export const Item = styled(Container)`
  margin-bottom: 2rem;
  padding: 5px;
  color: #ffffff7d;

  &:hover {
    cursor: pointer;
    color: ${lightTheme.neutral[700]};
  }

  &.active {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 7px;
    border: 1px solid rgba(255, 255, 255, 0.1);

    color: ${lightTheme.neutral[700]};
  }
`;
