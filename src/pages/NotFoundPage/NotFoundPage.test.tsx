import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

describe("Given the NotFoundPage component", () => {
  describe("When rendered", () => {
    test("Then it should show 'Page not found' inside a heading", () => {
      const notFoundPageTitleText = /page not found/i;

      render(<NotFoundPage />);

      const notFoundPageTitle = screen.getByRole("heading", {
        name: notFoundPageTitleText,
      });

      expect(notFoundPageTitle).toBeInTheDocument();
    });

    test("Then it should show a image with alternative text 'Page not found'", () => {
      const notFoundPageImageAlternativeText = /page not found/i;

      render(<NotFoundPage />);

      const notFoundPageImage = screen.getByAltText(
        notFoundPageImageAlternativeText,
      );

      expect(notFoundPageImage).toBeInTheDocument();
    });
  });
});
