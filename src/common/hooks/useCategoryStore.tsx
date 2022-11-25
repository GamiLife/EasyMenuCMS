import { useDispatch, useSelector } from 'react-redux';
import { addCategory, IAddCategory } from '../../store';

export const useCategoryStore = () => {
  const categories = useSelector((state: any) => state.categories);
  const dispatch = useDispatch();

  const addCategoryState = (newCategory: IAddCategory) =>
    dispatch(addCategory(newCategory));

  return {
    categories,
    ...addCategoryState,
  };
};
