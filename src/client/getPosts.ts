import { Post } from "../post/types";

const url =
  import.meta.env.VITE_API_URL ?? "https://blog-back-8yyw.onrender.com";

const getPosts = async (): Promise<{ posts: Post[] }> => {
  const respose = await fetch(`${url}/posts`);

  const posts = (await respose.json()) as { posts: Post[] };

  return posts;
};

export default getPosts;
