import React from "react";
import { useDispatch } from "react-redux";
import { setWeatherImage } from "../common/functions/imageFunctions";
import { iconUrls } from "../common/constants/urls";
import { iconsList } from "../common/constants/icons";

import {
  addFavouriteCity,
  removeFavouriteCity,
} from "../redux/actions/favoritesActions";

const ForecastHeader = ({ currentCityData, favouriteList }) => {
  const dispatch = useDispatch();
  const isCityinFavouritesList = () => {
    const filteredList = favouriteList.filter(
      (city) => city.id === currentCityData.cityDetails.id
    );

    return filteredList.length ? true : false;
  };
  const removeCityFromFavorites = () => {
    const filteredList = favouriteList.filter(
      (city) => city.id !== currentCityData.cityDetails.id
    );
    dispatch(removeFavouriteCity(filteredList));
  };
  const addCityToFavorites = () => {
    dispatch(addFavouriteCity(currentCityData));
  };
  const handleFavoritesRequest = () => {
    const filteredArray = favouriteList.filter(
      (city) => city.id === currentCityData.cityDetails.id
    );
    if (filteredArray.length) {
      removeCityFromFavorites();
    } else {
      addCityToFavorites();
    }
  };

  return (
    <div className="row">
      <div className="col-1">
        <img
          src={`${iconUrls.WEATHER_URL_PREFIX}${setWeatherImage(
            currentCityData.currentWeather.WeatherIcon
          )}${iconUrls.WEATHER_URL_SUFFIX}`}
          alt={currentCityData.currentWeather.WeatherText}
          style={{ marginRight: "20px", border: "outset" }}
        />
      </div>
      <div
        className="col-4 currentForecastData"
        style={{ marginRight: "10px", marginLeft: "10px" }}
      >
        <div> {currentCityData.cityDetails.name}</div>
        {` ${currentCityData.currentWeather.Temperature.Metric.Value} ${currentCityData.currentWeather.Temperature.Metric.Unit}`}
      </div>
      <div className="col-5" style={{ textAlign: "right" }}>
        <span onClick={handleFavoritesRequest} style={{ paddingLeft: "100%" }}>
          {isCityinFavouritesList()
            ? iconsList.HEART_ICON_FAV
            : iconsList.HEART_ICON}
        </span>
      </div>
    </div>
  );
};

export default ForecastHeader;
