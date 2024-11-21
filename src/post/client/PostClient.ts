import { Post, PostData } from "../types";
import { PostClientStructure } from "./types";

class PostClient implements PostClientStructure {
  private apiUrl = import.meta.env.VITE_API_URL;

  async getPosts(): Promise<Post[]> {
    const response = await fetch(`${this.apiUrl}/posts`);

    const { posts } = (await response.json()) as { posts: Post[] };

    return posts;
  }

  async createPost(postData: PostData): Promise<Post> {
    const response = await fetch(`${this.apiUrl}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    const newPost = (await response.json()) as Post;

    return newPost;
  }
}

const postClient = new PostClient();

export default postClient;
