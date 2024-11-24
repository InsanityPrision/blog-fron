import { useEffect, useState } from "react";
import Button from "../../../components/Button/Button";
import { PostData } from "../../types";
import postClient from "../../client/PostClient";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { setCreated } from "../../slice/uiSlice";

const PostForm: React.FC = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [
    { title, content, author, imageUrl, alternativeText },
    setNewPostData,
  ] = useState<PostData>({
    title: "",
    content: "",
    author: "",
    imageUrl: "",
    alternativeText: "",
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    const isValid =
      title.length > 0 &&
      content.length > 0 &&
      author.length > 0 &&
      imageUrl.length > 0 &&
      alternativeText.length;

    setIsDisabled(!isValid);
  }, [
    alternativeText.length,
    author.length,
    content.length,
    imageUrl.length,
    title.length,
  ]);

  const updateNewPostData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPostData((postData) => ({
      ...postData,
      [event.target.id]: event.target.value,
    }));
  };

  const navigate = useNavigate();

  const sendData = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    postClient.createPost({
      title,
      content,
      imageUrl,
      alternativeText,
      author,
    });

    dispatch(setCreated(true));

    navigate("/blog");
  };

  return (
    <form className="form" onSubmit={sendData}>
      <label htmlFor="title">Title:</label>
      <input
        className="form__input"
        type="text"
        id="title"
        value={title}
        onChange={updateNewPostData}
        required
      />
      <label htmlFor="content">Content:</label>
      <input
        type="text"
        className="form__input"
        id="content"
        value={content}
        onChange={updateNewPostData}
        required
      />
      <label htmlFor="imageUrl">Image URL:</label>
      <input
        type="url"
        className="form__input"
        id="imageUrl"
        value={imageUrl}
        onChange={updateNewPostData}
        required
      />
      <label htmlFor="alternativeText">Alternative text:</label>
      <input
        type="text"
        className="form__input"
        id="alternativeText"
        value={alternativeText}
        onChange={updateNewPostData}
        required
      />
      <label htmlFor="author">Author:</label>
      <input
        type="text"
        className="form__input"
        id="author"
        value={author}
        onChange={updateNewPostData}
        required
      />
      <Button
        type="submit"
        className="button"
        disabled={isDisabled}
        children="Create post"
      />
    </form>
  );
};

export default PostForm;
