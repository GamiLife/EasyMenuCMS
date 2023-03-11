import { Card, Container, Icon, Title } from '@gamiui/standard';
import classNames from 'classnames';
import * as React from 'react';
import { lightTheme } from '../../../../styles/design-system/theme';
import * as S from './styles';

export const ReportResources = () => {
  return (
    <Container padding="1rem" className={classNames('home')}>
      <Title>Hi, Peter</Title>
      <S.CardInfoWrapper>
        <Card shadow="xs" rounded="md">
          <S.CardInfo
            $background={lightTheme.semantic.warning}
            title={<S.CardTitle level="h2">Dishes</S.CardTitle>}
            description={
              <Container>
                <Container margin="1rem">
                  <Icon size="45px" name="dessert" color="white" />
                </Container>
                <S.CardLabel textAlign="center" text={'**100**'} />
              </Container>
            }
          />
        </Card>
        <Card shadow="xs" rounded="md">
          <S.CardInfo
            $background={lightTheme.semantic.success}
            title={<S.CardTitle level="h2">Dishes</S.CardTitle>}
            description={
              <Container>
                <Container margin="1rem">
                  <Icon size="45px" name="dessert" color="white" />
                </Container>
                <S.CardLabel textAlign="center" text={'**100**'} />
              </Container>
            }
          />
        </Card>
        <Card shadow="xs" rounded="md">
          <S.CardInfo
            $background={lightTheme.semantic.warning}
            title={<S.CardTitle level="h2">Dishes</S.CardTitle>}
            description={
              <Container>
                <Container margin="1rem">
                  <Icon size="45px" name="dessert" color="white" />
                </Container>
                <S.CardLabel textAlign="center" text={'**100**'} />
              </Container>
            }
          />
        </Card>
        <Card shadow="xs" rounded="md">
          <S.CardInfo
            $background={lightTheme.semantic.success}
            title={<S.CardTitle level="h2">Dishes</S.CardTitle>}
            description={
              <Container>
                <Container margin="1rem">
                  <Icon size="45px" name="dessert" color="white" />
                </Container>
                <S.CardLabel textAlign="center" text={'**100**'} />
              </Container>
            }
          />
        </Card>
      </S.CardInfoWrapper>
    </Container>
  );
};
