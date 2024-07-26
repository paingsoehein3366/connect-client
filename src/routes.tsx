import { createBrowserRouter } from "react-router-dom";
import Admin from "./pages/admin/pages";
import BaseLayout from "./pages/admin/components/BaseLayout";
import { CardDetail } from "./pages/admin/components/card-detail";
import { Home } from "./pages/home";
import BaseLayoutHeader from "./components/layout/BaseLayout";
import SearchRoom from "./pages/home/components/search-room";


export const routes = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      { path: "/admin", element: <Admin /> },
      { path: "/admin/:id", element: <CardDetail /> }
    ],
  },
  {
    path: '/home',
    element: <BaseLayoutHeader />,
    children: [
      { path: '/home', element: <Home /> },
      { path: '/home/:id', element: <SearchRoom /> },
    ]
  }
])