import PostsList from "./PostsList";
import { render, screen } from "@testing-library/react";
import { Post } from "../../types";

describe("Given the PostList component", () => {
  describe("When it receives 'I love cats' and 'I have cats' posts", () => {
    const posts: Post[] = [
      {
        title: "I like cats",
        imageUrl: "gato.webp",
        alternativeText: "A black cat running",
        content: "I like cats forever!",
        author: "LoverCats04",
        id: "cb0cb815-0673-499c-bb94-beed32496f32",
        date: new Date(),
      },
      {
        title: "I hate cats",
        imageUrl: "nocats.webp",
        alternativeText: "A cat in the jail",
        content: "I hate cats forever!",
        author: "HaterCats04",
        id: "0731f668-592c-49f8-a0bb-a2ac9b8d72f1",
        date: new Date(),
      },
    ];

    test("Then it should show 'I love cats' and 'I have cats' in a heading", async () => {
      const postLoveCatsTitle = /I like cats/i;
      const postHateCatsTitle = /I hate cats/i;

      render(<PostsList posts={posts} />);

      const postILoveCats = screen.getByRole("heading", {
        name: postLoveCatsTitle,
      });

      const postIHateCats = screen.getByRole("heading", {
        name: postHateCatsTitle,
      });

      expect(postILoveCats).toBeInTheDocument();
      expect(postIHateCats).toBeInTheDocument();
    });

    test("Then it should show two images with alternatives texts 'A black cat running' and 'A cat in the jail'", () => {
      const blackcatImageAlternativeText = /a black cat running/i;
      const psotCatInTheJailAlternativeText = /a cat in the jail/i;

      render(<PostsList posts={posts} />);

      const postBlackCatImage = screen.getByAltText(
        blackcatImageAlternativeText,
      );

      const postCatInTheJail = screen.getByAltText(
        psotCatInTheJailAlternativeText,
      );

      expect(postBlackCatImage).toBeInTheDocument();
      expect(postCatInTheJail).toBeInTheDocument();
    });
  });
});
