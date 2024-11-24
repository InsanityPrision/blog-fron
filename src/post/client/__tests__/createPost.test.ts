import { PostData } from "../../types";
import postClient from "../PostClient";

describe("Given the createPost method of PostClient class", () => {
  describe("When it's called and receives post data with title 'Los perros molan'", () => {
    test("Then it should return a new post with the title 'Los perros molan'", async () => {
      const newPostData: PostData = {
        title: "Los perros molan",
        imageUrl: "",
        alternativeText: "",
        author: "perroLover",
        content: "Los perros molan mucho porque te traen la pelota",
      };

      const newPost = await postClient.createPost(newPostData);

      expect(newPost.title).toMatch(newPostData.title);
    });
  });
});
