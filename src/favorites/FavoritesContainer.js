import React from "react";
import { connect } from "react-redux";
import FavoriteItem from "./FavoriteItem";
import { weatherUrls } from "../common/constants/urls";
import { weatherActions } from "../common/constants/actionType";
import { useDispatch } from "react-redux";
import { getData } from "../common/functions/getDataFromApi";
import { apiKeyUrls } from "../common/constants/urls";
import { Link } from "react-router-dom";
import "./style.css";
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
    <div className="row favourite-container">
      {favorites.map((city) => (
        <div
          className="col-1 city-item-container"
          key={city.id}
          onClick={() => setFavouriteCity(city)}
        >
          <Link to="/" className="link-item">
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
