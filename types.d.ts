export interface PageMeta {
  title: ?string;
  description: ?string;
  image: ?string;
}

export type PostData = {
  contentHtml: string;
} & PostMeta;

export interface PostMeta {
  id: string;
  title: string;
  date: ?string;
  keywords: ?string;
  description: ?string;
  descriptionHtml: ?string;
  image: ?string;
  priority: ?number;
}

export interface AllPostMeta {
  allPostsMeta: PostMeta[];
}

export interface SocialMedia {
  path: string;
  name: string;
  account: string;
  link: string;
  prompt: string;
}
