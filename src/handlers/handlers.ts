import { http, HttpResponse } from "msw";
import { url } from "../client/getPosts";

export const handlers = [
  http.get(`${url}/posts`, () => {
    return HttpResponse.json([
      {
        title: "I like cats",
        imageUrl: "",
        content: "I like cats forever!",
        author: "LoverCats04",
        id: "cb0cb815-0673-499c-bb94-beed32496f32",
        date: "2024-11-16T16:18:17.501Z",
      },
      {
        title: "I hate cats",
        imageUrl: "",
        content: "I hate cats forever!",
        author: "HaterCats04",
        id: "0731f668-592c-49f8-a0bb-a2ac9b8d72f1",
        date: "2024-11-16T16:18:17.501Z",
      },
    ]);
  }),
];
