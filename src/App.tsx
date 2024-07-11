import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { MantineProvider } from "@mantine/core";
import { queryClient } from "./lib/react-query";
import '@mantine/core/styles.css';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <RouterProvider router={routes} />
      </MantineProvider>
    </QueryClientProvider>
  )
}