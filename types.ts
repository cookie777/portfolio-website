export interface SocialMedia {
  path: string;
  name: string;
  account: string;
  link: string;
  prompt: string;
}

export type PostData = {
  contentHtml: string;
} & PostMeta;

export interface PostMeta {
  id: string;
  title: string;
  date: string;
  keywords: string;
  descriptionHtml: string;
  image: string;
}
