import Navbar from "./common/components/Navbar/Navbar";
import Search from "./common/components/Search/Search";
import ForecastContainer from "./weather/ForecastContainer";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Favorites from "./favorites/FavoritesContainer";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles, NavBarStyle } from "./global";
import "./style.css";
import { useState } from "react";
function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Provider store={store}>
          <Router>
            <NavBarStyle>
              <Navbar toggleChange={toggleTheme} themeValue={theme} />
            </NavBarStyle>

            <div className="container">
              <Switch>
                <Route path="/favorites">
                  <Favorites />
                </Route>
                <Route path="/">
                  <div className="row search">
                    <Search />
                  </div>
                  <div className="row main-forecast-container container">
                    {<ForecastContainer />}
                  </div>
                </Route>
              </Switch>
            </div>
          </Router>
        </Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
