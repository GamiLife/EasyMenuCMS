import { ResourceBase } from './base.interface';

export interface ICompany {
  id: number;
  name: string;
  description: string;
}

export class Company implements ResourceBase {
  id?: ICompany['id'];
  name: ICompany['name'];
  description: ICompany['description'];

  constructor({ id, name, description }: ICompany) {
    this.id = id;
    this.name = name;
    this.description = description;
  }

  buildCreateRequest() {
    return {
      name: this.name,
      description: this.description,
    };
  }

  buildEditRequest() {}

  buildTableCols() {
    return {
      number: this.id,
      name: this.name,
      description: this.description,
      actions: this.id,
    };
  }
}
