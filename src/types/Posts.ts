export type Post = {
  id: string;
  title: string;
  content: string;
  createdAt: Date | number;
  tags: Array<string>;
  pics: Array<string>;
};
