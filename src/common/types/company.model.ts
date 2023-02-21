import {
  EThemeModeType,
  EThemeProviderType,
} from '@gamilife/node-components.core.core';
import { ResourceBase } from './base.interface';

export type TDetails = {
  user: string;
  phone: string;
  countryCode: string;
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

export interface ITheme {
  id: number;
  themeMode: EThemeModeType;
  type: EThemeProviderType;
  value: string;
}

export interface ICompany {
  id: number;
  name: string;
  description: string;
  slugUrl: string;
  brand: IBrand;
  theme: ITheme[];
  socialNetworks: ISocialNetwork[];
}

export class Company implements ResourceBase {
  id?: ICompany['id'];
  name: ICompany['name'];
  description: ICompany['description'];
  slugUrl: ICompany['slugUrl'];
  brand: ICompany['brand'];
  theme: ICompany['theme'];
  socialNetworks: ICompany['socialNetworks'];

  constructor({
    id,
    name,
    description,
    slugUrl,
    brand,
    theme,
    socialNetworks,
  }: ICompany) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.slugUrl = slugUrl;
    this.brand = brand;
    this.theme = theme;
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
      theme: this.theme,
      socialNetworks: this.socialNetworks,
    };

    return detail;
  }

  buildGet() {
    const detail = {
      id: this.id,
      name: this.name,
      description: this.description,
      slugUrl: this.slugUrl,
      brand: this.brand,
      theme: this.theme,
      socialNetworks: this.socialNetworks,
    };

    return detail;
  }

  buildTableCols() {}
}
