import Button from "../../../components/Button/Button";

const PostForm: React.FC = () => {
  return (
    <form className="form">
      <label htmlFor="title">Title:</label>
      <input className="form__input" type="text" id="title" required />
      <label htmlFor="content">Content:</label>
      <input type="text" className="form__input" id="content" required />
      <label htmlFor="imageUrl">Image URL:</label>
      <input type="url" className="form__input" id="imageUrl" required />
      <label htmlFor="author">Author:</label>
      <input type="text" className="form__input" id="author" required />
      <Button
        type="submit"
        className="button"
        children={"Create post"}
        disabled={true}
      />
    </form>
  );
};

export default PostForm;
