import { Post, PostData } from "../post/types";
import { ClientStructure } from "./types";

class Client implements ClientStructure {
  private apiUrl = import.meta.env.VITE_API_URL;

  getPosts = async (): Promise<{ posts: Post[] }> => {
    const response = await fetch(`${this.apiUrl}/posts`);

    const posts = (await response.json()) as { posts: Post[] };

    return posts;
  };

  createPost = (postData: PostData): void => {
    const url = import.meta.env.VITE_API_URL;

    fetch(`${url}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
  };
}

const postClient = new Client();

export default postClient;
