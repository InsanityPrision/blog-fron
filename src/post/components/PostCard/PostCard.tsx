import Button from "../../../components/Button/Button";
import postClient from "../../client/PostClient";
import { Post } from "../../types";
import "./PostCard.css";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { title, author, content, date, imageUrl, alternativeText } = post;

  const newDate = new Date(date).toLocaleDateString();

  const deltePost = () => {
    postClient.deletePost(post.id);
  };

  return (
    <li>
      <article className="post__post-container">
        <div className="post__post">
          <h3 className="post__title">{title}</h3>
          <p className="post__content">{content}</p>
          <div className="post__information">
            <span>By: {author}</span>
            <span>In: {newDate}</span>
            <Button
              children="Delete post"
              className="button button--delete"
              disabled={false}
              type="button"
              onClick={deltePost}
            />
          </div>
        </div>
        <img
          className="post__images"
          src={`images${imageUrl}`}
          alt={alternativeText}
          width={374}
          height={342}
        />
      </article>
    </li>
  );
};

export default PostCard;
