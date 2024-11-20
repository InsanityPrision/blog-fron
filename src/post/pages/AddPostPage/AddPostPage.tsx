import PostForm from "../../components/PostForm/PostForm";
import "./AddPostPage.css";

const AddPostPage: React.FC = () => {
  return (
    <main className="formPage--container">
      <h2>Add a new post:</h2>
      <PostForm />
    </main>
  );
};

export default AddPostPage;
