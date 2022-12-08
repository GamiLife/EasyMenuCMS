import { Metadata } from './metadata.model';

interface IResponse<T> {
  data: T;
  metaData?: Metadata;
  statusCode: number;
  message: string;
}

export class Response<T> {
  readonly data: T;
  readonly metaData?: Metadata;
  readonly statusCode: number;
  readonly message: string;

  constructor(props: IResponse<T>) {
    this.data = props.data;
    this.statusCode = props.statusCode;
    this.message = props.message;
  }
}
