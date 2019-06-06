export class  Todo {
  id: number;
  title: string;
  content: string;
  status: string;

  constructor(title: string = '' , content: string = '' , status: string = '') {
    this.title = title;
    this.content = content;
    this.status = status;
  }
}
