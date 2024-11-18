import { useCallback, useEffect, useState } from "react";
import PostsList from "../../post/components/PostsList/PostsList";
import { Post } from "../../post/types";
import "./BlogPage.css";
import Client from "../../client/Client";

const BlogPage: React.FC = () => {
  const [postsApi, setPostsApi] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadPosts = useCallback(async () => {
    const apiurl = import.meta.env.VITE_API_URL;

    const postClient = new Client(`${apiurl}`);
    const { posts } = await postClient.getPosts();

    setPostsApi(posts);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    loadPosts();
    setIsLoading(false);
  }, [loadPosts]);

  return (
    <main className="main-content">
      <h2>Posts:</h2>
      <PostsList posts={postsApi} />
      {isLoading && (
        <div className="loader-container">
          <span className="loader-container__loader"></span>
        </div>
      )}
    </main>
  );
};

export default BlogPage;
