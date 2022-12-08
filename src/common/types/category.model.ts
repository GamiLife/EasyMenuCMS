interface ICategory {
  id: number;
  description: string;
  title: string;
  iconId: string;
}

export class Category {
  id: ICategory['id'];
  title: ICategory['title'];
  description: ICategory['description'];
  iconId: ICategory['iconId'];

  constructor(props: ICategory) {
    this.id = props.id;
    this.title = props.title;
    this.description = props.description;
    this.iconId = props.iconId;
  }

  buildTableCols() {
    return {
      number: this.id,
      title: this.title,
      description: this.description,
    };
  }
}
