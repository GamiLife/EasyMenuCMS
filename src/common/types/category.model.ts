import { ResourceBase } from './base.interface';
import { ICompany } from './company.model';
import { IStoreModel, StoreModel } from './store.model';

interface IIconOption {
  value: string;
  label: string;
}

interface ICategory extends IStoreModel {
  id?: number;
  description: string;
  title: string;
  iconId: string;
  company?: ICompany;
  iconOptions?: IIconOption[];
}

export class Category extends StoreModel implements ResourceBase {
  id?: ICategory['id'];
  title: ICategory['title'];
  description: ICategory['description'];
  iconId: ICategory['iconId'];
  company?: ICategory['company'];
  iconOptions?: ICategory['iconOptions'];

  constructor({
    id,
    title,
    description,
    iconId,
    company,
    iconOptions,
    ...storeProps
  }: ICategory) {
    super(storeProps);

    this.id = id;
    this.title = title;
    this.description = description;
    this.iconId = iconId;
    if (company) this.company = company;
    if (iconOptions) this.iconOptions = iconOptions;
  }

  buildCreateRequest() {
    return {
      title: this.title,
      description: this.description,
      iconId: this.iconId,
      companyId: this.companyId,
    };
  }

  buildEditRequest() {
    return {
      body: {
        title: this.title,
        description: this.description,
        iconId: this.iconId,
        companyId: this.companyId,
      },
      id: this.id,
    };
  }

  buildGet() {
    return {
      title: this.title,
      description: this.description,
      iconId: this.iconOptions?.find(({ value }) => this.iconId == value),
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
