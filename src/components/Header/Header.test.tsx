import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given the Header component", () => {
  const pageTitle = "Blog";

  describe("When it receivres 'Blog' and rendered", () => {
    test("Then it should show 'Blog' in a heading", () => {
      const headingTitle = /blog/i;

      render(<Header title={pageTitle} />);

      const headerTitle = screen.getByRole("heading", {
        name: headingTitle,
      });

      expect(headerTitle).toBeInTheDocument();
    });
  });

  describe("When rendered", () => {
    test("Then it should show two links 'Blog' and 'Add post'", () => {
      const blogLinkText = /blog/i;
      const addPostLinkText = /add post/i;

      render(<Header title={pageTitle} />);

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
