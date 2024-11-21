import { http, HttpResponse } from "msw";
import { Post } from "../post/types";

const url = import.meta.env.VITE_API_URL;

if (!url) {
  throw new Error("Env variable needed");
}

export const handlers = [
  http.get(`${url}/posts`, () => {
    return HttpResponse.json<{ posts: Post[] }>({
      posts: [
        {
          title: "I like potatoes",
          imageUrl: "potatoes.webp",
          alternativeText: "Fried potatoes",
          content: "I like potatoes forever!",
          author: "Patata04",
          id: "cb0cb815-0673-499c-bb94-beed32496f32",
          date: new Date(),
        },
        {
          title: "I hate potatoes with katchup",
          imageUrl: "potatoeswithkatchup.webp",
          alternativeText: "Potatoes with katchup",
          content: "I hate potatoes with katchup forever!",
          author: "HaterCats04",
          id: "0731f668-592c-49f8-a0bb-a2ac9b8d72f1",
          date: new Date(),
        },
      ],
    });
  }),
];
