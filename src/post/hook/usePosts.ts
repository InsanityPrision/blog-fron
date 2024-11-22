import { useCallback, useState } from "react";
import { Post } from "../types";
import postClient from "../client/PostClient";

const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadPosts = useCallback(async () => {
    setIsLoading(true);

    const posts = await postClient.getPosts();

    setPosts(posts);

    setIsLoading(false);
  }, []);

  return {
    posts,
    loadPosts,
    isLoading,
  };
};

export default usePosts;
