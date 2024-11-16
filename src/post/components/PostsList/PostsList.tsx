import { Post } from "../../types";
import PostCard from "../PostCard/PostCard";
import "./PostsList.css";

interface PostsListProps {
  posts: Post[];
}

const PostsList: React.FC<PostsListProps> = ({ posts }) => {
  return (
    <ul className="posts">
      {posts.map((post) => {
        return <PostCard key={post.id} post={post} />;
      })}
    </ul>
  );
};

export default PostsList;
