import { useGamiTheme } from '@gamiui/standard';
import { TFoodIconOptions } from '../../modules/category/CategoryForm';
import { foodsDict, foodsDictType } from '../../modules/category/constants';
import { FoodOption } from '../../modules/category/FoodOption';

export const useFoodOptions = () => {
  const { globalIcons } = useGamiTheme();

  const getFoodIcons = () => {
    const foodIconsGet = Object.entries(globalIcons()).filter(([, value]) => {
      const { type } = value as any;

      if (!type) return false;
      return type === 'food';
    });

    const foodIconOptionsGet = foodIconsGet.map(([key, value]) => ({
      value: key,
      label: (
        <FoodOption
          iconName={key as any}
          text={foodsDict[key as foodsDictType]}
        />
      ) as React.ReactNode,
    }));

    return foodIconOptionsGet;
  };

  const foodIconsOptions: TFoodIconOptions = getFoodIcons();

  return { foodIconsOptions };
};
