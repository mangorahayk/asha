import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import RoutesProviders, { router } from "./routes/Routes";
import theme from "./themes/theme";
// import { Provider } from "@/components/ui/provider"


function App() {
  return (
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
  );
}

export default App;
