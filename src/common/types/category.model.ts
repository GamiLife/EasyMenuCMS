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
  imageCategory: string;
  company?: ICompany;
  iconOptions?: IIconOption[];
}

export class Category extends StoreModel implements ResourceBase {
  id?: ICategory['id'];
  title: ICategory['title'];
  imageCategory: ICategory['imageCategory'];
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
    imageCategory,
    ...storeProps
  }: ICategory) {
    super(storeProps);

    this.id = id;
    this.title = title;
    this.description = description;
    this.iconId = iconId;
    this.imageCategory = imageCategory;
    if (company) this.company = company;
    if (iconOptions) this.iconOptions = iconOptions;
  }

  buildCreateRequest() {
    const request = new FormData();
    request.append('title', this.title);
    request.append('description', this.description);
    request.append('iconId', this.iconId);
    request.append('companyId', '1');
    request.append('file', this.imageCategory);

    return request;
  }

  buildEditRequest() {
    const request = new FormData();
    request.append('title', this.title);
    request.append('description', this.description);
    request.append('iconId', this.iconId);
    request.append('companyId', '1');
    request.append('file', this.imageCategory);

    return {
      body: request,
      id: this.id,
    };
  }

  buildGet() {
    const detail = {
      title: this.title,
      description: this.description,
      iconId: this.iconOptions?.find(({ value }) => this.iconId == value),
      imageCategory: this.imageCategory
        ? [
            {
              id: 1,
              url: this.imageCategory,
            },
          ]
        : [],
    };

    return detail;
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
