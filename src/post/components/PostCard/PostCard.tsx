import { Post } from "../../types";
import "./PostCard.css";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <li>
      <article className="posts__post">
        <h3 className="posts__title">{post.title}</h3>
      </article>
    </li>
  );
};

export default PostCard;
