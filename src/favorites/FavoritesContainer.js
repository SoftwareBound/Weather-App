import React from "react";
import { connect } from "react-redux";
import FavoriteItem from "./FavoriteItem";
import { weatherUrls } from "../common/constants/urls";
import { weatherActions } from "../common/constants/actionType";
import { useDispatch } from "react-redux";
import { getData } from "../common/functions/getDataFromApi";
import { apiKeyUrls } from "../common/constants/urls";
import { Link } from "react-router-dom";

const FavoritesContainer = ({ favorites }) => {
  const dispatch = useDispatch();
  const setFavouriteCity = (city) => {
    getData(
      `${weatherUrls.CITY_CURRENT_WEATHER}${city.id}${apiKeyUrls.APIKEY_URL}`
    ).then(function (weather) {
      dispatch({
        type: weatherActions.LOAD_CITY_WEATHER,
        payload: {
          cityDetails: {
            name: city.name,
            id: city.id,
          },
          currentWeather: weather[0],
        },
      });
      getData(
        `${weatherUrls.CITY_FIVE_DAY_FORECAST}${city.id}${apiKeyUrls.APIKEY_URL}`
      )
        .then((res) =>
          dispatch({
            type: weatherActions.LOAD_CITY_WEATHER_FORECAST,
            payload: res,
          })
        )
        .catch((error) => alert(`forecast fetch error ${error}`));
    });
  };

  return (
    <div className="row" style={{ marginTop: "5%" }}>
      {favorites.map((city) => (
        <div
          className="col-1"
          key={city.id}
          style={{ borderStyle: "ridge", margin: "5%" }}
          onClick={() => setFavouriteCity(city)}
        >
          <Link
            to="/"
            style={{
              textDecorationLine: "none",
            }}
          >
            <FavoriteItem data={city} />
          </Link>
        </div>
      ))}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    favorites: state.favoritesReducer,
  };
};
export default connect(mapStateToProps)(FavoritesContainer);
