import Navbar from "./common/components/Navbar";
import Search from "./common/components/Search";
import ForecastContainer from "./weather/ForecastContainer";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Favorites from "./favorites/Favorites";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Provider store={store}>
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
            </Provider>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
