import { Post } from "../../types";
import "./PostCard.css";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { title, author, content, date, imageUrl } = post;

  const newDate = new Date(date).toLocaleDateString();

  return (
    <li>
      <article className="posts__post-container">
        <div className="posts__post">
          <h3 className="posts__title">{title}</h3>
          <span className="posts__content">{content}</span>
          <span>By: {author}</span>
          <span>In: {newDate}</span>
        </div>
        <img
          className="posts__images"
          src={`images${imageUrl}`}
          alt={title}
          width={374}
          height={342}
        />
      </article>
    </li>
  );
};

export default PostCard;
