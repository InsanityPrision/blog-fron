import { render, screen } from "@testing-library/react";
import PostCard from "./PostCard";
import { Post } from "../../types";

describe("Given the PostCard component", () => {
  describe("When it receives 'I love cats' post", () => {
    const postDate = new Date();

    const post: Post = {
      title: "I like cats",
      content: "I like cats forever!",
      imageUrl: "cat.webp",
      alternativeText: "A white cat jummping",
      author: "LoverCats04",
      id: "cb0cb815-0673-499c-bb94-beed32496f32",
      date: postDate,
    };

    test("Then it should show 'I love cats'", async () => {
      const postTitle = /I like cats/i;

      render(<PostCard post={post} />);

      const postILoveCats = screen.getByRole("heading", {
        name: postTitle,
      });

      expect(postILoveCats).toBeInTheDocument();
    });

    test("Then it should show a image with alternative text 'A white cat jummping'", () => {
      render(<PostCard post={post} />);

      const postImage = screen.getByAltText(/a white cat jummping/i);

      expect(postImage).toBeInTheDocument();
    });
  });
});
