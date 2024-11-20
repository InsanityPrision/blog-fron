import { Post, PostData } from "../types";
import { PostClientStructure } from "./types";

class PostClient implements PostClientStructure {
  private apiUrl = import.meta.env.VITE_API_URL;

  async getPosts(): Promise<{ posts: Post[] }> {
    const response = await fetch(`${this.apiUrl}/posts`);

    const posts = (await response.json()) as { posts: Post[] };

    return posts;
  }

  createPost(postData: PostData): void {
    fetch(`${this.apiUrl}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
  }
}

const postClient = new PostClient();

export default postClient;
