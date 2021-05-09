import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWeatherImage } from "../common/functions/imageFunctions";
import { iconUrls } from "../common/constants/urls";
import { iconsList } from "../common/constants/icons";
import "./style.css";
import { checkDegreeScale } from "../common/functions/handleDegreeConversion";
import {
  addFavouriteCity,
  removeFavouriteCity,
} from "../redux/actions/favoritesActions";

const ForecastHeader = ({ currentCityData, favouriteList }) => {
  const dispatch = useDispatch();
  const scale = useSelector((state) => state.scaleReducer);
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
    <div className="row header-forecast ">
      <div className="col-1 ">
        <img
          src={`${iconUrls.WEATHER_URL_PREFIX}${setWeatherImage(
            currentCityData.currentWeather.WeatherIcon
          )}${iconUrls.WEATHER_URL_SUFFIX}`}
          alt={currentCityData.currentWeather.WeatherText}
          id="current-weather-icon"
        />
      </div>
      <div className="col-4 current-weather-details">
        <div>{`${currentCityData.cityDetails.name}, ${currentCityData.cityDetails.country}`}</div>
        {checkDegreeScale(
          scale,
          currentCityData.currentWeather.Temperature.Metric.Value,
          currentCityData.currentWeather.Temperature.Metric.Unit
        )}
      </div>
      <div className="col-5 fav-icon-container">
        <span className="fav-icon-header" onClick={handleFavoritesRequest}>
          {isCityinFavouritesList()
            ? iconsList.HEART_ICON_FAV
            : iconsList.HEART_ICON}
        </span>
      </div>
    </div>
  );
};

export default ForecastHeader;
