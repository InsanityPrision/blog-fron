import { useCallback, useState } from "react";
import postClient from "../client/PostClient";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { loadPosts as loadPostActionCreator } from "../slice/postsSlice";

const usePosts = () => {
  const [isLoading, setIsLoading] = useState(false);

  const posts = useAppSelector((state) => state.postsState.posts);
  const dispatch = useAppDispatch();

  const loadPosts = useCallback(async () => {
    setIsLoading(true);
    const posts = await postClient.getPosts();

    dispatch(loadPostActionCreator(posts));

    setIsLoading(false);
  }, [dispatch]);

  return {
    posts,
    loadPosts,
    isLoading,
  };
};

export default usePosts;
