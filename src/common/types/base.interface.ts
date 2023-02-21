export interface ResourceBase {
  buildCreateRequest: () => any;
  buildEditRequest: () => any;
  buildTableCols: () => any;
  buildGet?: () => any;
}
