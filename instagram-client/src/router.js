import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import NotificationsPage from "./pages/NotificationsPage";
import MessagesPage from "./pages/MessagesPage";
import BaseLayout from "./layouts/BaseLayout";
import ReelsPage from "./pages/ReelsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <BaseLayout>
        <HomePage />
      </BaseLayout>
    ),
  },
  {
    path: "/explore",
    element: (
      <BaseLayout>
        <ExplorePage />
      </BaseLayout>
    ),
  },
  {
    path: "/notifications",
    element: (
      <BaseLayout>
        <NotificationsPage />
      </BaseLayout>
    ),
  },
  {
    path: "/messages",
    element: (
      <BaseLayout>
        <MessagesPage />
      </BaseLayout>
    ),
  },
  {
    path: "/reels",
    element: (
      <BaseLayout>
        <ReelsPage />
      </BaseLayout>
    ),
  },
]);

export default router;
