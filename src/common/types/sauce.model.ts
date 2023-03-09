import { IStoreModel, StoreModel } from './store.model';
import { ResourceBase } from './base.interface';
import { ICompany } from './company.model';

interface ISauce extends IStoreModel {
  id?: number;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  company?: ICompany;
}

export class Sauce extends StoreModel implements ResourceBase {
  id?: ISauce['id'];
  title: ISauce['title'];
  description: ISauce['description'];
  imageUrl: ISauce['imageUrl'];
  price: ISauce['price'];
  company?: ISauce['company'];

  constructor({
    id,
    title,
    description,
    imageUrl,
    price,
    company,
    ...storeProps
  }: ISauce) {
    super(storeProps);

    this.id = id;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.price = price;
    this.company = company;
    if (company) this.company = company;
  }

  buildCreateRequest() {
    const request = {
      title: this.title,
      description: this.description,
      imageUrl: this.imageUrl,
      price: this.price,
      companyId: 1,
    };
    return request;

    // const request = new FormData();
    // request.append('title', this.title);
    // request.append('description', this.description);
    // request.append('file', this.imageUrl);
    // request.append('price', this.price)

    // return request;
  }

  buildEditRequest() {
    const request = {
      title: this.title,
      description: this.description,
      imageUrl: this.imageUrl,
      price: this.price,
      companyId: 1,
    };

    return {
      body: request,
      id: this.id,
    };
  }

  buildGet() {
    const detail = {
      title: this.title,
      description: this.description,
      imageUrl: this.imageUrl
        ? [
            {
              id: 1,
              url: this.imageUrl,
            },
          ]
        : [],
      price: this.price,
    };

    return detail;
  }

  buildTableCols() {
    return {
      number: this.id,
      title: this.title,
      description: this.description,
      imageUrl: this.imageUrl,
      price: this.price,
      actions: this.id,
    };
  }
}
