import { render, screen } from "@testing-library/react";
import NavigationMenu from "./NavigationMenu";
import { MemoryRouter } from "react-router-dom";

describe("Given the NavigationMenu component", () => {
  describe("When rendered", () => {
    test("Then it should show two links with 'Blog' and 'Add post'", () => {
      const blogLinkText = /blog/i;
      const addPostLinkText = /add post/i;

      render(
        <MemoryRouter>
          <NavigationMenu />
        </MemoryRouter>,
      );

      const blogLink = screen.getByRole("link", {
        name: blogLinkText,
      });

      const addPostLink = screen.getByRole("link", {
        name: addPostLinkText,
      });

      expect(blogLink).toBeInTheDocument();
      expect(addPostLink).toBeInTheDocument();
    });
  });
});
