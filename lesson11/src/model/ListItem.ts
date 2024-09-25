export interface Item {
  id: string;
  item: string;
  checked: boolean;
}

export default class ListItem implements Item {
  private _id: string;
  private _item: string;
  private _checked: boolean;

  constructor(id: string = '', item: string = '', checked: boolean = false) {
    this._id = id;
    this._item = item;
    this._checked = checked;
  }

  // ID
  get id(): string {
    return this._id;
  }

  set id(id: string) {
    this._id = id;
  }

  // ITEM
  get item(): string {
    return this._item;
  }

  set item(item: string) {
    this._item = item;
  }

  // CHECKED
  get checked(): boolean {
    return this._checked;
  }

  set checked(checked: boolean) {
    this._checked = checked;
  }
}
