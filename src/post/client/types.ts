import { Post, PostData } from "../types";

export interface PostClientStructure {
  getPosts: () => Promise<{ posts: Post[] }>;
  createPost: (postData: PostData) => void;
}
