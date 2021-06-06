export interface IColumn {
  path: string[];
  text: string;
  type: 'link' | 'text';
};

export interface ILinkColumn extends IColumn {
  link: string;
  type: 'link';
}