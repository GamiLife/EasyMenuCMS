import styled from '@emotion/styled';
import { Card, Container, RichText, Title } from '@gamiui/standard';

export const CardInfoWrapper = styled(Container)`
  display: flex;
  gap: 1rem;
  margin-top: 3rem;
`;

export const CardInfo = styled(Card.Content)<{ $background?: string }>`
  background-color: ${({ $background }) => `${$background}`};
`;

export const CardTitle = styled(Title)`
  color: white;
`;
export const CardLabel = styled(RichText)`
  color: white;
  font-size: 20px;
`;
