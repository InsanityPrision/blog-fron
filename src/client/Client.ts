import { Post } from "../post/types";
import { ClientStructure } from "./types";

class Client implements ClientStructure {
  constructor(private apiUrl: string) {}

  getPosts = async (): Promise<{ posts: Post[] }> => {
    const response = await fetch(`${this.apiUrl}/posts`);

    const posts = (await response.json()) as { posts: Post[] };

    return posts;
  };
}

export default Client;
