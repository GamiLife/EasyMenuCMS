import { IStoreModel, StoreModel } from './store.model';

interface ICategory extends IStoreModel {
  id?: number;
  description: string;
  title: string;
  iconId: string;
}

export class Category extends StoreModel {
  id?: ICategory['id'];
  title: ICategory['title'];
  description: ICategory['description'];
  iconId: ICategory['iconId'];

  constructor({ id, title, description, iconId, ...storeProps }: ICategory) {
    super(storeProps);

    this.id = id;
    this.title = title;
    this.description = description;
    this.iconId = iconId;
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
