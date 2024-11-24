import { useEffect } from "react";
import PostsList from "../../components/PostsList/PostsList";
import usePosts from "../../hook/usePosts";
import "./BlogPage.css";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setCreated } from "../../slice/uiSlice";

const BlogPage: React.FC = () => {
  const { posts, loadPosts, isLoading } = usePosts();
  const isCreated = useAppSelector((state) => state.uiState.isCreated);
  const dispatch = useAppDispatch();

  setTimeout(() => {
    dispatch(setCreated(false));
  }, 1000);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  return (
    <main className="main-content">
      <h2>Posts:</h2>
      <PostsList posts={posts} />
      {isLoading && (
        <div className="loader-container" aria-label="Loading" role="alert">
          <span className="loader-container__loader" />
        </div>
      )}
      {isCreated && <span className="post-created" children={"Post created"} />}
    </main>
  );
};

export default BlogPage;
