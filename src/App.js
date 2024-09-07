import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import RoutesProviders, { router } from "./routes/Routes";
import { Provider } from "react-redux";
import { store } from "./store/store";
import theme from "./themes/theme";

function App() {
  return (
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <RouterProvider router={router} />
        </ChakraProvider>
      </Provider>
  );
}

export default App;
