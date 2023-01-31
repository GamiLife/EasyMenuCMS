import { EasyDayJS } from '../../../helpers/date';
import { ResourceBase } from './base.interface';
import { ICompany } from './company.model';
import { IStoreModel, StoreModel } from './store.model';

export type TStaticPage = 'informative';

interface IStaticPages extends IStoreModel {
  id?: number;
  url: string;
  htmlContent: string;
  pageType: TStaticPage;
  company?: ICompany;
}

export class StaticPages extends StoreModel implements ResourceBase {
  id?: IStaticPages['id'];
  url: IStaticPages['url'];
  htmlContent: IStaticPages['htmlContent'];
  pageType: IStaticPages['pageType'];
  company?: IStaticPages['company'];

  constructor({
    id,
    url,
    htmlContent,
    pageType,
    company,
    ...storeProps
  }: IStaticPages) {
    super(storeProps);

    this.id = id;
    this.url = url;
    this.htmlContent = htmlContent;
    this.pageType = pageType;
    if (company) this.company = company;
  }

  buildCreateRequest() {
    const request = {
      url: this.url,
      htmlContent: this.htmlContent,
      pageType: this.pageType,
      companyId: 1,
    };
    return request;
  }

  buildEditRequest() {
    const request = {
      url: this.url,
      htmlContent: this.htmlContent,
      pageType: this.pageType,
      companyId: 1,
    };

    return {
      body: request,
      id: this.id,
    };
  }

  buildGet() {
    return {
      url: this.url,
      htmlContent: this.htmlContent,
      pageType: this.pageType,
    };
  }

  buildTableCols() {
    return {
      number: this.id,
      url: this.url,
      pageType: this.pageType,
      actions: this.id,
    };
  }
}
