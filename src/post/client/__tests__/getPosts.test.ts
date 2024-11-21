import { Post } from "../../types";
import postClient from "../PostClient";

describe("Given the getPosts method of PostClient class", () => {
  describe("When it's called", () => {
    test("Then it should return a list of posts with titles 'I like potatoes' and 'I hate potatoes with katchup'", async () => {
      const post1Title = "I like potatoes";
      const post2Title = "I hate potatoes with katchup";

      const posts = await postClient.getPosts();

      expect(posts).toMatchObject(<Post[]>[
        <Partial<Post>>{ title: post1Title },
        <Partial<Post>>{ title: post2Title },
      ]);
    });
  });
});
