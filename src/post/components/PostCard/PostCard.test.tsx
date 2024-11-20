import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PostCard from "./PostCard";
import { Post } from "../../types";

describe("Given the PostCard component", () => {
  describe("When it receives 'I love cats' post", () => {
    test("Then it should show 'I love cats'", async () => {
      const postTitle = /I like cats/i;
      const postDate = new Date();

      const post: Post = {
        title: "I like cats",
        content: "I like cats forever!",
        imageUrl: "",
        alternativeText: "",
        author: "LoverCats04",
        id: "cb0cb815-0673-499c-bb94-beed32496f32",
        date: postDate,
      };

      render(
        <MemoryRouter>
          <PostCard post={post} />
        </MemoryRouter>,
      );

      const postILoveCats = screen.getByRole("heading", {
        name: postTitle,
      });

      expect(postILoveCats).toBeInTheDocument();
    });
  });
});
