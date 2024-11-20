import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import App from "../components/App/App";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import AddPostPage from "../post/pages/AddPostPage/AddPostPage";
import BlogPage from "../post/pages/BlogPage/BlogPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Navigate to={"/blog"} />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/add-post" element={<AddPostPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);

export default router;
