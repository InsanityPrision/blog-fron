import { useCallback, useState } from "react";
import postClient from "../client/PostClient";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { loadPosts as loadPostActionCreator } from "../slice/postsSlice";
import { PostData } from "../types";

const usePosts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [{ title, content, author, imageUrl }, setNewPostData] =
    useState<PostData>({
      title: "",
      content: "",
      author: "",
      imageUrl: "",
      alternativeText: "",
    });

  const posts = useAppSelector((state) => state.postsState.posts);
  const dispatch = useAppDispatch();

  const loadPosts = useCallback(async () => {
    setIsLoading(true);
    const posts = await postClient.getPosts();

    dispatch(loadPostActionCreator(posts));

    setIsLoading(false);
  }, [dispatch]);

  const isFormValid = () => {
    const isValid =
      title.length > 0 &&
      content.length > 0 &&
      author.length > 0 &&
      imageUrl.length > 0;

    setIsDisabled(!isValid);
  };

  const updateNewPostData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPostData((postData) => ({
      ...postData,
      [event.target.id]: event.target.value,
    }));
  };

  return {
    title,
    content,
    author,
    imageUrl,
    posts,
    loadPosts,
    isLoading,
    isDisabled,
    isFormValid,
    updateNewPostData,
  };
};

export default usePosts;
