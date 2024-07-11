import { createBrowserRouter } from "react-router-dom";
import Admin from "./pages/admin/pages";
import BaseLayout from "./pages/admin/components/BaseLayout";


export const routes = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      { path: "/admin", element: <Admin /> }
    ]
  }
])