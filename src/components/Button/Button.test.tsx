import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given the Button component", () => {
  describe("When it rendered", () => {
    test("Then it should show 'Create post' inside the button", async () => {
      render(<Button children="Create post" />);

      const createPostButton = await screen.findByRole("button", {
        name: /create post/i,
      });

      expect(createPostButton).toBeInTheDocument();
    });

    test("Then it should show a button disablead", async () => {
      render(<Button children="Create post" disabled />);

      const createPostButton = await screen.findByRole("button", {
        name: /create post/i,
      });

      expect(createPostButton).toBeDisabled();
    });
  });
});
