import { Post, PostData } from "../post/types";

export interface ClientStructure {
  getPosts: () => Promise<{ posts: Post[] }>;
  createPost: (postData: PostData) => void;
}
