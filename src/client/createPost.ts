import { PostData } from "../post/types";

const postPost = (postData: PostData): void => {
  const url = import.meta.env.VITE_API_URL;

  fetch(`${url}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });
};

export default postPost;
