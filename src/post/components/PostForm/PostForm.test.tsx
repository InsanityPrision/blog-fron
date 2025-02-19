import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import PostForm from "./PostForm";
import { Provider } from "react-redux";
import { store } from "../../store";
import { BrowserRouter } from "react-router-dom";

describe("Given the PostForm component", () => {
  describe("When it rendered", () => {
    test("Then it should show 'Title', 'Content', 'Image URL', 'Author' and 'Alternative Text' fields", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <PostForm />
          </BrowserRouter>
        </Provider>,
      );

      const titleField = screen.getByLabelText(/title/i);
      const contentField = screen.getByLabelText(/content/i);
      const imageUrlField = screen.getByLabelText(/image url/i);
      const authorField = screen.getByLabelText(/author/i);
      const alternativeTextField = screen.getByLabelText(/alternative text/i);

      expect(titleField).toBeInTheDocument();
      expect(contentField).toBeInTheDocument();
      expect(imageUrlField).toBeInTheDocument();
      expect(authorField).toBeInTheDocument();
      expect(alternativeTextField).toBeInTheDocument();
    });

    test("Then it should show a disabled 'Create post' button", () => {
      const createPostButtonText = /create post/i;

      render(
        <Provider store={store}>
          <BrowserRouter>
            <PostForm />
          </BrowserRouter>
        </Provider>,
      );

      const createPostButton = screen.getByRole("button", {
        name: createPostButtonText,
      });

      expect(createPostButton).toBeDisabled();
    });
  });

  describe("When the user fills the title field with 'Me gustan las patatas'", () => {
    test("Then it should show 'Me gustan las patatas'inside the field", async () => {
      const user = userEvent.setup();
      const titleFieldTextByUser = "Me gustan las patatas";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <PostForm />
          </BrowserRouter>
        </Provider>,
      );

      const titleField = screen.getByLabelText(/title/i);

      await user.type(titleField, titleFieldTextByUser);

      expect(titleField).toHaveValue(titleFieldTextByUser);
    });
  });

  describe("When the user fills all required fields", () => {
    test("Then it should show an enabled 'Create post' button", async () => {
      const user = userEvent.setup();

      render(
        <Provider store={store}>
          <BrowserRouter>
            <PostForm />
          </BrowserRouter>
        </Provider>,
      );

      const titleField = screen.getByLabelText(/title/i);
      const contentField = screen.getByLabelText(/content/i);
      const imageUrlField = screen.getByLabelText(/image url/i);
      const authorField = screen.getByLabelText(/author/i);
      const alternativeTextField = screen.getByLabelText(/alternative text/i);

      await user.type(titleField, "Me gustan las patatas");
      await user.type(contentField, "Me encantan las patatas");
      await user.type(imageUrlField, "patatas.webp");
      await user.type(authorField, "Luis Luisez");
      await user.type(alternativeTextField, "Unas patatas fritas");

      const createPostButton = screen.getByRole("button", {
        name: /create post/i,
      });

      expect(createPostButton).toBeEnabled();
    });
  });
});
