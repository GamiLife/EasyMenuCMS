import { Button, Card, Container, Icon, RichText, Tag } from '@gamiui/standard';
import classNames from 'classnames';
import { lightTheme } from '../../../../styles/design-system/theme';
import * as S from './styles';

export const PlanetDeck = () => {
  return (
    <Container>
      <Card width='fit' shadow='xs' rounded='xs'>
        <Card.Cover>
          <img
            alt=''
            width='100%'
            src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
          />
        </Card.Cover>
        <Card.Content
          title={<RichText text='**Hi, this is my title**' />}
          description={
            <Container>
              <RichText text='Hi this is description' />
              <S.TagContainer>
                <Tag.Group max={3}>
                  <Tag
                    text='History'
                    padding='6px'
                    background={lightTheme.primary.first}
                    color='white'
                  />
                  <Tag
                    text='History'
                    padding='6px'
                    background={lightTheme.primary.first}
                    color='white'
                  />
                  <Tag
                    text='History'
                    padding='6px'
                    background={lightTheme.primary.first}
                    color='white'
                  />
                  <Tag
                    text='History'
                    padding='6px'
                    background={lightTheme.primary.first}
                    color='white'
                  />
                </Tag.Group>
              </S.TagContainer>
            </Container>
          }
        />
        <S.CardFooter>
          <Container
            className={classNames('flex', 'justify-between')}
            style={{ marginBottom: '1rem' }}
          >
            <Icon name='heart' />
            <Icon name='share' />
            <Icon name='controls' />
          </Container>
          <Container>
            <Button
              type='button'
              rounded='sm'
              height='auto'
              variant='primary'
              width='full'
            >
              Edit
            </Button>
          </Container>
        </S.CardFooter>
      </Card>
    </Container>
  );
};
