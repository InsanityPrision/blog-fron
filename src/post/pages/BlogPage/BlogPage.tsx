import { useCallback, useEffect, useState } from "react";
import PostsList from "../../components/PostsList/PostsList";
import { Post } from "../../types";
import "./BlogPage.css";
import postClient from "../../client/PostClient";

const BlogPage: React.FC = () => {
  const [posts, setPostsApi] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadPosts = useCallback(async () => {
    const posts = await postClient.getPosts();

    setPostsApi(posts);
  }, []);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      await loadPosts();
      setIsLoading(false);
    })();
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
