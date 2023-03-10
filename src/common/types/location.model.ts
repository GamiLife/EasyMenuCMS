import { IStoreModel, StoreModel } from './store.model';
import { ResourceBase } from './base.interface';
import { ICompany } from './company.model';

interface ILocation extends IStoreModel {
  id?: number;
  name: string;
  address: string;
  phone: string;
  company?: ICompany;
}

export class Location extends StoreModel implements ResourceBase {
  id?: ILocation['id'];
  name: ILocation['name'];
  address: ILocation['address'];
  phone: ILocation['phone'];
  company?: ILocation['company'];

  constructor({ id, name, address, phone, company, ...storeProps }: ILocation) {
    super(storeProps);

    this.id = id;
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.company = company;
    if (company) this.company = company;
  }

  buildCreateRequest() {
    const request = {
      name: this.name,
      address: this.address,
      phone: this.phone,
      companyId: 1,
    };

    return request;
  }

  buildEditRequest() {
    const request = {
      name: this.name,
      address: this.address,
      phone: this.phone,
      companyId: 1,
    };

    return {
      body: request,
      id: this.id,
    };
  }

  buildGet() {
    const detail = {
      name: this.name,
      address: this.address,
      phone: this.phone,
    };

    return detail;
  }

  buildTableCols() {
    return {
      name: this.name,
      address: this.address,
      phone: this.phone,
      actions: this.id,
    };
  }
}
