interface IPagination {
  page: number;
  sizeByPage: number;
  totalItems: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNexPage: boolean;
}

export class Pagination {
  readonly page: IPagination['page'];
  readonly sizeByPage: IPagination['sizeByPage'];
  readonly totalItems: IPagination['totalItems'];
  readonly totalPages: IPagination['totalPages'];
  readonly hasPreviousPage: IPagination['hasPreviousPage'];
  readonly hasNexPage: IPagination['hasNexPage'];

  constructor(props: IPagination) {
    this.page = props.page;
    this.sizeByPage = props.sizeByPage;
    this.totalPages = props.totalPages;
    this.totalItems = props.totalItems;
    this.hasPreviousPage = props.hasPreviousPage;
    this.hasNexPage = props.hasNexPage;
  }
}
