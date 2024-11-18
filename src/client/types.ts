import { Post } from "../post/types";

export interface ClientStructure {
  getPosts: () => Promise<{ posts: Post[] }>;
}
