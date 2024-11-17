import { Post } from "../post/types";

export const url = import.meta.env.VITE_API_URL;

export const getPosts = async (): Promise<{ posts: Post[] }> => {
  const respose = await fetch(`${url}/posts`);

  const posts = (await respose.json()) as { posts: Post[] };

  return posts;
};
