// Markdown

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
  dbId: string;
  title: string;
  date: ?string;
  keywords: ?string;
  description: ?string;
  descriptionHtml: ?string;
  image: ?string;
  priority: ?number;
  likes: ?number;
}

export interface AllPostMeta {
  allPostsMeta: PostMeta[];
}

// Mongodb
import { MongoClient, Db, MongoClientOptions } from "mongodb";

interface MyMongoClientOptions extends MongoClientOptions {
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
}

interface MongoConnection {
  client: MongoClient;
  db: Db;
}

declare global {
  var mongo: {
    conn: MongoConnection | null;
    promise: Promise<MongoConnection> | null;
  };
}

export interface PostLikes {
  likes: number;
}

// others
export interface SocialMedia {
  path: string;
  name: string;
  account: string;
  link: string;
  prompt: string;
}
