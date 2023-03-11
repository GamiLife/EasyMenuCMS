import {
  EThemeModeType,
  EThemeProviderType,
} from '@gamilife/node-components.core.core';
import { options } from '../../modules/company/CompanyForm';
import { ResourceBase } from './base.interface';

export type TOperations = 'insert' | 'update' | 'delete';

export type TDetails = {
  id: number;
  user: string;
  phone: string;
  countryCode: string;
  operation?: TOperations;
};

export interface ISocialNetwork {
  id: number;
  name: string;
  description: string;
  details: TDetails;
}

export interface IBrand {
  id: number;
  metaTitle: string;
  metaDescription: string;
}

export interface ICompany {
  id: number;
  name: string;
  description: string;
  slugUrl: string;
  brand: IBrand;
  socialNetworks: ISocialNetwork[];
}

export class Company implements ResourceBase {
  id?: ICompany['id'];
  name: ICompany['name'];
  description: ICompany['description'];
  slugUrl: ICompany['slugUrl'];
  brand: ICompany['brand'];
  socialNetworks: ICompany['socialNetworks'];

  constructor({
    id,
    name,
    description,
    slugUrl,
    brand,
    socialNetworks,
  }: ICompany) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.slugUrl = slugUrl;
    this.brand = brand;
    this.socialNetworks = socialNetworks;
  }

  buildCreateRequest() {}

  buildEditRequest() {
    const detail = {
      company: {
        id: this.id,
        name: this.name,
        description: this.description,
        slugUrl: this.slugUrl,
      },
      brand: this.brand,
      brandSocialNetworks: this.socialNetworks.map((social) => ({
        socialNetworkId: +social.id,
        countryCode: social.details.countryCode,
        phone: social.details.phone,
        user: social.details.user,
        id: +social.details.id,
        operation: social.details.operation,
      })),
    };

    return { body: detail, id: detail.company.id };
  }

  buildGet() {
    const detail = {
      id: this.id,
      name: this.name,
      description: this.description,
      slugUrl: this.slugUrl,
      brandId: this.brand.id,
      metaTitle: this.brand.metaTitle,
      metaDescription: this.brand.metaDescription,
      socialNetworks: this.socialNetworks.map((social) => ({
        socialNetworkId: options.find(
          (option) => `${social.id}` == option.value
        ),
        id: social.details.id,
        user: social.details.user,
        phone: social.details.phone,
        countryCode: social.details.countryCode,
      })),
    };

    return detail;
  }

  buildTableCols() {}
}
