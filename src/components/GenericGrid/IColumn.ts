export interface IColumn {
  path: string[];
  text: string;
  type: 'link' | 'number' | 'percent' | 'text';
};

export interface ILinkColumn extends IColumn {
  link: string;
  type: 'link';
};

export interface INumberColumn extends IColumn {
  decimalPlaces?: number;
  type: 'number';
};

export interface IPercentColumn extends IColumn {
  type: 'percent';
};
