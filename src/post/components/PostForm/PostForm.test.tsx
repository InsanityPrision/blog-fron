import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import PostForm from "./PostForm";
import { Provider } from "react-redux";
import { store } from "../../store";

describe("Given the PostForm component", () => {
  describe("When it rendered", () => {
    test("Then it should show 'Title', 'Content', 'Image URL', 'Author' fields", () => {
      render(
        <Provider store={store}>
          <PostForm />
        </Provider>,
      );

      const titleField = screen.getByLabelText(/title/i);
      const contentField = screen.getByLabelText(/content/i);
      const imageUrlField = screen.getByLabelText(/image url/i);
      const authorField = screen.getByLabelText(/author/i);

      expect(titleField).toBeInTheDocument();
      expect(contentField).toBeInTheDocument();
      expect(imageUrlField).toBeInTheDocument();
      expect(authorField).toBeInTheDocument();
    });

    test("Then it should show a disabled 'Create post' button", () => {
      const createPostButtonText = /create post/i;

      render(
        <Provider store={store}>
          <PostForm />
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
          <PostForm />
        </Provider>,
      );

      const titleField = screen.getByLabelText(/title/i);

      await user.type(titleField, titleFieldTextByUser);

      expect(titleField).toHaveValue(titleFieldTextByUser);
    });
  });
});
