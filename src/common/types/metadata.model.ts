import { Pagination } from './pagination.model';

interface IMetadata {
  pagination: Pagination;
}

export class Metadata {
  readonly pagination: IMetadata['pagination'];

  constructor(props: IMetadata) {
    this.pagination = props.pagination;
  }
}
