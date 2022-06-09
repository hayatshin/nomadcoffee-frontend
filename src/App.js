import { ApolloProvider, useReactiveVar } from "@apollo/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { client, darkModeVar, isLoggedInVar } from "./apollo";
import routes from "./routes";
import CoffeeShopList from "./screens/CoffeeShopList";
import AddCoffeeShop from "./screens/AddCoffeeShop";
import Home from "./screens/Home";
import HomeCoffee from "./screens/HomeCoffee";
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";
import SignUp from "./screens/SignUp";
import { darkTheme, GlobalStyles, lightTheme } from "./styles";
import EditCoffeeShop from "./screens/EditCoffeeShop";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);
  return (
    <ApolloProvider client={client}>
      <HelmetProvider>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <GlobalStyles />
          <BrowserRouter>
            <Routes>
              <Route exact path={routes.home} element={<HomeCoffee />} />
              <Route
                exact
                path={routes.coffeeShopList}
                element={<CoffeeShopList />}
              />
              <Route exact path={routes.add} element={<AddCoffeeShop />} />
              <Route exact path={routes.edit} element={<EditCoffeeShop />} />
              <Route path="*" element={<NotFound />} />
              {!isLoggedIn ? (
                <Route path={routes.signUp} element={<SignUp />} />
              ) : null}
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </HelmetProvider>
    </ApolloProvider>
  );
}

export default App;
