import { render, screen } from "@testing-library/react";
import NavigationMenu from "./NavigationMenu";

describe("Given the NavigationMenu component", () => {
  describe("When rendered", () => {
    test("Then it should show two links with 'Blog' and 'Add post'", () => {
      const pageTitle = "Blog";
      const blogLinkText = "Blog";
      const addPostLinkText = "Add post";

      render(<NavigationMenu title={pageTitle} />);

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
