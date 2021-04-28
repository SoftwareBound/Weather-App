import Navbar from "./common/components/Navbar";
import Search from "./common/components/Search";
import ForecastContainer from "./weather/ForecastContainer";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Favorites from "./favorites/FavoritesContainer";
function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <Route path="/favorites">
                <Favorites />
              </Route>
              <Route exact path="/">
                <div
                  className="row search"
                  style={{
                    margin: "auto",
                    width: "fit-content",
                    marginTop: "30px",
                  }}
                >
                  <Search />
                </div>
                <div
                  className="row forecast-container"
                  style={{
                    margin: "auto",
                    width: "90%",
                    minHeight: "400px",
                    marginTop: "30px",
                    border: "solid",
                  }}
                >
                  <ForecastContainer />
                </div>
              </Route>
            </Switch>
          </div>
        </Router>
      </Provider>
    </>
  );
}

export default App;
