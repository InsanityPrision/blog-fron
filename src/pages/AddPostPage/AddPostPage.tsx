import Button from "../../components/Button/Button";
import "./AddPostPage.css";

const AddPost: React.FC = () => {
  return (
    <main className="formPage--container">
      <h2>Add a new post:</h2>
      <form className="form">
        <label htmlFor="title">Title:</label>
        <input className="form__input" type="text" id="title" required />
        <label htmlFor="content">Content:</label>
        <input type="text" className="form__input" id="content" required />
        <label htmlFor="imageUrl">Image URL:</label>
        <input type="url" className="form__input" id="imageUrl" required />
        <label htmlFor="author">Author:</label>
        <input type="text" className="form__input" id="author" required />
        <Button type="submit" text="Create post"></Button>
      </form>
    </main>
  );
};

export default AddPost;
