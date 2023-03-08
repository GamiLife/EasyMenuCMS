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
  company?: ISauce['company'];

  constructor({
    id,
    title,
    description,
    price,
    image,
    company,
    ...storeProps
  }: ISauce) {
    super(storeProps);

    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.image = image;
    this.company = company;
    if (company) this.company = company;
  }

  buildCreateRequest() {
    const request = {
      title: this.title,
      description: this.description,
      price: this.price,
      image: this.image,
      companyId: 1,
    };

    return request;
  }

  buildEditRequest() {
    const request = {
      title: this.title,
      description: this.description,
      price: this.price,
      image: this.image,
      companyId: 1,
    };

    return {
      body: request,
      id: this.id,
    };
  }

  buildget() {
    const detail = {
      title: this.title,
      description: this.description,
      price: this.price,
      image: this.image,
    };

    return detail;
  }

  buildTableCols() {
    return {
      title: this.title,
      description: this.description,
      price: this.price,
      image: this.image,
      actions: this.id,
    };
  }
}
