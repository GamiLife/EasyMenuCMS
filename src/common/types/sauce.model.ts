import { IStoreModel, StoreModel } from './store.model';
import { ResourceBase } from './base.interface';
import { ICompany } from './company.model';

interface IIconOption {
  value: string;
  label: string;
}

interface ISauce extends IStoreModel {
  id?: number;
  title: string;
  description: string;
  price: number;
  image: string;
  company?: ICompany;
}

export class Sauce extends StoreModel implements ResourceBase {
  id?: ISauce['id'];
  title: ISauce['title'];
  description: ISauce['description'];
  price: ISauce['price'];
  image: ISauce['image'];
  company?: ICompany;

  constructor({ id, title, description, price, image, ...storeProps }: ISauce) {
    super(storeProps);

    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.image = image;
  }
}
