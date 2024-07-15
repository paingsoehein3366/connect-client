import { createBrowserRouter } from "react-router-dom";
import Admin from "./pages/admin/pages";
import BaseLayout from "./pages/admin/components/BaseLayout";
import { CardDetail } from "./pages/admin/components/card-detail";


export const routes = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      { path: "/admin", element: <Admin /> },
      { path: "/admin/:id", element: <CardDetail /> }
    ]
  }
])