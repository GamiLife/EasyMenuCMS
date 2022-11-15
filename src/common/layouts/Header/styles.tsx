import styled from '@emotion/styled';
import { Container, Title } from '@gamiui/standard';
import { lightTheme } from '../../../../styles/design-system/theme';

export const Header = styled(Container)`
  max-height: 100px;
  background-color: ${lightTheme.primary.white};
`;

export const TitleBrand = styled(Title)`
  color: ${lightTheme.primary.black};
`;

export const HeaderLeft = styled(Container)`
  gap: 1rem;
`;
