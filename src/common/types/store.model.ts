export interface IStoreModel {
  companyId: number;
}

export class StoreModel {
  companyId: number;

  constructor({ companyId }: IStoreModel) {
    this.companyId = companyId;
  }
}
