import { render, screen } from "@testing-library/react";
import BlogPage from "./BlogPage";
import { Provider } from "react-redux";
import { store } from "../../store";

describe("Given the BlogPage component", () => {
  describe("When rendered", () => {
    test("Then it should show 'Blog' in a heading", () => {
      const blogPageTitleText = /posts/i;

      render(
        <Provider store={store}>
          <BlogPage />
        </Provider>,
      );

      const blogPageTitle = screen.getByRole("heading", {
        name: blogPageTitleText,
      });

      expect(blogPageTitle).toBeInTheDocument();
    });

    test("Then it should show a loading", () => {
      const loadingText = /loading/i;

      render(
        <Provider store={store}>
          <BlogPage />
        </Provider>,
      );

      const loading = screen.getByRole("alert", {
        name: loadingText,
      });

      expect(loading).toBeInTheDocument();
    });
  });

  describe("When rendered and receives 'I like potatoes' and 'I hate potatoes with katchup' posts", () => {
    test("Then it should show 'I like potatoes' and 'I hate potatoes with katchup' inside a heading", async () => {
      const post1TitleText = /i like potatoes/i;
      const post2TitleText = /i hate potatoes with katchup/i;

      render(
        <Provider store={store}>
          <BlogPage />
        </Provider>,
      );

      const post1Title = await screen.findByRole("heading", {
        name: post1TitleText,
      });

      const post2Title = await screen.findByRole("heading", {
        name: post2TitleText,
      });

      expect(post1Title).toBeInTheDocument();
      expect(post2Title).toBeInTheDocument();
    });

    test("Then it should show two images with alternatives texts 'Fried potatoes' and 'Potatoes with katchup'", async () => {
      render(
        <Provider store={store}>
          <BlogPage />
        </Provider>,
      );

      const post1Image = await screen.findByAltText(/fried potatoes/i);
      const post2Image = await screen.findByAltText(/potatoes with katchup/i);

      expect(post1Image).toBeInTheDocument();
      expect(post2Image).toBeInTheDocument();
    });
  });
});
