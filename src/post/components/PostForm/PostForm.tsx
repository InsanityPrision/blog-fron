import { useEffect } from "react";
import Button from "../../../components/Button/Button";
import usePosts from "../../hook/usePosts";

const PostForm: React.FC = () => {
  const {
    isDisabled,
    isFormValid,
    updateNewPostData,
    title,
    content,
    author,
    imageUrl,
  } = usePosts();

  useEffect(() => {
    isFormValid();
  }, [isFormValid]);

  return (
    <form className="form">
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
