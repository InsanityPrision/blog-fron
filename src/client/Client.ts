import { Post } from "../post/types";
import { ClientStructure } from "./types";

class Client implements ClientStructure {
  private apiUrl = import.meta.env.VITE_API_URL;

  getPosts = async (): Promise<{ posts: Post[] }> => {
    const response = await fetch(`${this.apiUrl}/posts`);

    const posts = (await response.json()) as { posts: Post[] };

    return posts;
  };
}

const postClient = new Client();

export default postClient;
