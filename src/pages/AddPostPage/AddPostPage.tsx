import PostForm from "../../post/components/PostForm/PostForm";
import "./AddPostPage.css";

const AddPost: React.FC = () => {
  return (
    <main className="formPage--container">
      <h2>Add a new post:</h2>
      <PostForm />
    </main>
  );
};

export default AddPost;
