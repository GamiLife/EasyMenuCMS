import { EasyDayJS } from "../../../helpers/date";
import { ResourceBase } from "./base.interface";
import { ICompany } from "./company.model";
import { IStoreModel, StoreModel } from "./store.model";

interface INew extends IStoreModel {
  id?: number;
  title: string;
  description: string;
  imageUrl: string;
  backgroundColor: string;
  startDate: string;
  endDate: string;
  company?: ICompany;
}

export class New extends StoreModel implements ResourceBase {
  id?: INew["id"];
  title: INew["title"];
  description: INew["description"];
  imageUrl: INew["imageUrl"];
  backgroundColor: INew["backgroundColor"];
  startDate: INew["startDate"];
  endDate: INew["endDate"];
  company?: INew["company"];

  constructor({
    id,
    title,
    description,
    imageUrl,
    backgroundColor,
    startDate,
    endDate,
    company,
    ...storeProps
  }: INew) {
    super(storeProps);

    this.id = id;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.backgroundColor = backgroundColor;
    this.startDate = startDate;
    this.endDate = endDate;
    if (company) this.company = company;
  }

  buildCreateRequest() {
    const request = new FormData();
    request.append("title", this.title);
    request.append("description", this.description);
    request.append("backgroundColor", this.backgroundColor);
    request.append("startDate", this.startDate);
    request.append("endDate", this.endDate);
    request.append("companyId", "1");
    request.append("file", this.imageUrl);

    return request;
  }

  buildEditRequest() {
    const request = new FormData();
    request.append("title", this.title);
    request.append("description", this.description);
    request.append("backgroundColor", this.backgroundColor);
    request.append("startDate", this.startDate);
    request.append("endDate", this.endDate);
    request.append("companyId", "1");
    request.append("file", this.imageUrl);

    return {
      body: request,
      id: this.id,
    };
  }

  buildGet() {
    return {
      title: this.title,
      description: this.description,
      imageUrl: [
        {
          id: 1,
          url: this.imageUrl,
        },
      ],
      backgroundColor: this.backgroundColor,
      startDate: new Date(this.startDate),
      endDate: new Date(this.endDate),
    };
  }

  buildTableCols() {
    return {
      number: this.id,
      title: this.title,
      description: this.description,
      imageUrl: this.imageUrl,
      startDate: EasyDayJS(this.startDate).format(),
      endDate: EasyDayJS(this.endDate).format(),
      actions: this.id,
    };
  }
}
