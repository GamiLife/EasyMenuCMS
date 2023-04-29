import { getImage } from '../../../helpers';
import { ResourceBase } from './base.interface';
import { ICompany } from './company.model';
import { IStoreModel, StoreModel } from './store.model';

interface IPrincipalDish {
  id: number;
  title: string;
  description: string;
  priceByUnit: number;
  imageUrl: string;
  maxItems: string;
}

interface IElement {
  id: number;
  title: string;
  description: string;
  priceByUnit: number;
  imageUrl: string;
}

interface IDish {
  id: number;
  maxItemsByRow: number;
  priceByUnit: number;
  dish: IElement;
}

interface ISauce {
  id: number;
  maxItemsByRow: number;
  priceByUnit: number;
  sauce: IElement;
}

interface ICombo extends IStoreModel {
  id?: number;
  title: string;
  description: string;
  maxItems: number;

  principalDish: IPrincipalDish;
  dishes: IDish[];
  sauces: ISauce[];

  company?: ICompany;
}

export class Combo extends StoreModel implements ResourceBase {
  id?: ICombo['id'];
  title: ICombo['title'];
  description: ICombo['description'];
  maxItems: ICombo['maxItems'];
  principalDish: ICombo['principalDish'];
  dishes: ICombo['dishes'];
  sauces: ICombo['sauces'];
  company?: ICombo['company'];

  constructor({
    id,
    title,
    description,
    maxItems,
    company,
    principalDish,
    dishes,
    sauces,
    ...storeProps
  }: ICombo) {
    super(storeProps);

    this.id = id;
    this.title = title;
    this.description = description;
    this.maxItems = maxItems;
    this.principalDish = principalDish;
    this.dishes = dishes;
    this.sauces = sauces;
    if (company) this.company = company;
  }

  buildCreateRequest() {}

  buildEditRequest() {}

  buildGet() {
    const detail = {
      title: this.title,
      description: this.description,
      maxItems: this.maxItems,

      dishTitle: this.principalDish.title,
      dishDescription: this.principalDish.description,
      dishPriceByUnit: this.principalDish.priceByUnit,
      dishImageUrl: getImage(this.principalDish.imageUrl),
      dishMaxItems: this.principalDish.maxItems,

      dishesDetail: this.dishes.map((dish) => ({
        id: dish.id,
        maxItemsByRow: dish.maxItemsByRow,
        priceByUnit: dish.priceByUnit,
        dishId: dish.dish.id,
        dishName: dish.dish.title,
        dishImage: getImage(dish.dish.imageUrl),
      })),

      saucesDetail: this.sauces.map((sauce) => ({
        id: sauce.id,
        maxItemsByRow: sauce.maxItemsByRow,
        priceByUnit: sauce.priceByUnit,
        sauceId: sauce.sauce.id,
        sauceName: sauce.sauce.title,
        sauceImage: getImage(sauce.sauce.imageUrl),
      })),
    };

    return detail;
  }

  buildTableCols() {
    return {
      number: this.id,
      title: this.title,
      description: this.description,
      maxItems: this.maxItems,
      actions: this.id,
    };
  }
}
