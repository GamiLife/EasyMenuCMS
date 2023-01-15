import { Container, Icon } from '@gamiui/standard';
import { IconNames } from '@gamiui/standard/lib/types/core/domain/types';
import { lightTheme } from '../../../../styles/design-system/theme';
import * as S from './styles';

export interface IFoodOption {
  text: string;
  iconName: IconNames;
}

export const FoodOption = ({ text, iconName }: IFoodOption) => {
  return (
    <S.FoodOption>
      <S.FoodIcon rounded="full" padding="0.5rem">
        <Icon color={lightTheme.primary.mediumPurple} name={iconName} />
      </S.FoodIcon>
      {text}
    </S.FoodOption>
  );
};
