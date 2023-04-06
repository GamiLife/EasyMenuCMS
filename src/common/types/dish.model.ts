import { ResourceBase } from './base.interface';
import { ICompany } from './company.model';
import { IStoreModel, StoreModel } from './store.model';

interface IDish extends IStoreModel {
  id?: number;
  title: string;
  slug: string;
  description: string;
  priceByUnit: number;
  maxItems: number;
  imageUrl: string;
  company?: ICompany;
}

export class Dish extends StoreModel implements ResourceBase {
  id?: IDish['id'];
  title: IDish['title'];
  description: IDish['description'];
  imageUrl: IDish['imageUrl'];
  slug: IDish['slug'];
  priceByUnit: IDish['priceByUnit'];
  maxItems: IDish['maxItems'];
  company?: IDish['company'];

  constructor({
    id,
    title,
    description,
    imageUrl,
    priceByUnit,
    maxItems,
    company,
    slug,
    ...storeProps
  }: IDish) {
    super(storeProps);

    this.id = id;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.priceByUnit = priceByUnit;
    this.maxItems = maxItems;
    this.slug = slug;
    if (company) this.company = company;
  }

  buildCreateRequest() {}

  buildEditRequest() {}

  buildGet() {
    return {
      title: this.title,
      description: this.description,
      slug: this.slug,
      priceByUnit: this.priceByUnit,
      maxItems: this.maxItems,
      imageUrl: this.imageUrl
        ? [
            {
              id: 1,
              url: this.imageUrl,
            },
          ]
        : [],
    };
  }

  buildTableCols() {
    return {
      number: this.id,
      title: this.title,
      description: this.description,
      slug: this.slug,
      priceByUnit: this.priceByUnit,
      maxItems: this.maxItems,
      imageUrl: this.imageUrl,
      actions: this.id,
    };
  }
}
