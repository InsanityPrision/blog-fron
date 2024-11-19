import { MemoryRouter } from "react-router-dom";
import PostsList from "./PostsList";
import { render, screen } from "@testing-library/react";
import { Post } from "../../types";

describe("Given the PostList component", () => {
  describe("When it receives 'I love cats' and 'I have cats' posts", () => {
    test("Then it should show 'I love cats' and 'I have cats' in a heading", async () => {
      const postLoveCatsTitle = /I like cats/i;
      const postHateCatsTitle = /I hate cats/i;
      const posts: Post[] = [
        {
          title: "I like cats",
          imageUrl: "",
          content: "I like cats forever!",
          author: "LoverCats04",
          id: "cb0cb815-0673-499c-bb94-beed32496f32",
          date: new Date(),
        },
        {
          title: "I hate cats",
          imageUrl: "",
          content: "I hate cats forever!",
          author: "HaterCats04",
          id: "0731f668-592c-49f8-a0bb-a2ac9b8d72f1",
          date: new Date(),
        },
      ];

      render(
        <MemoryRouter>
          <PostsList posts={posts} />
        </MemoryRouter>,
      );

      const postILoveCats = screen.getByRole("heading", {
        name: postLoveCatsTitle,
      });

      const postIHateCats = screen.getByRole("heading", {
        name: postHateCatsTitle,
      });

      expect(postILoveCats).toBeInTheDocument();
      expect(postIHateCats).toBeInTheDocument();
    });
  });
});
