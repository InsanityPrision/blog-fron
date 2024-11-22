import { useEffect } from "react";
import PostsList from "../../components/PostsList/PostsList";
import usePosts from "../../hook/usePosts";
import "./BlogPage.css";

const BlogPage: React.FC = () => {
  const { posts, loadPosts, isLoading } = usePosts();

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
    </main>
  );
};

export default BlogPage;
