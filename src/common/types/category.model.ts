import { ResourceBase } from './base.interface';
import { IStoreModel, StoreModel } from './store.model';

interface ICompany {
  id: number;
  name: string;
  description: string;
}

interface ICategory extends IStoreModel {
  id?: number;
  description: string;
  title: string;
  iconId: string;
  company?: ICompany;
}

export class Category extends StoreModel implements ResourceBase {
  id?: ICategory['id'];
  title: ICategory['title'];
  description: ICategory['description'];
  iconId: ICategory['iconId'];
  company?: ICategory['company'];

  constructor({
    id,
    title,
    description,
    iconId,
    company,
    ...storeProps
  }: ICategory) {
    super(storeProps);

    this.id = id;
    this.title = title;
    this.description = description;
    this.iconId = iconId;
    if (company) this.company = company;
  }

  buildCreateRequest() {
    return {
      title: this.title,
      description: this.description,
      iconId: this.iconId,
      companyId: this.companyId,
    };
  }

  buildTableCols() {
    return {
      number: this.id,
      title: this.title,
      description: this.description,
      actions: this.id,
    };
  }
}
