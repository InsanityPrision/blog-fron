import { Post, PostData } from "../types";

export interface PostClientStructure {
  getPosts(): Promise<Post[]>;
  createPost(postData: PostData): void;
  deletePost(id: string): Promise<void>;
}
