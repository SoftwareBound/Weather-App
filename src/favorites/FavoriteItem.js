import React from "react";
import { iconUrls } from "../common/constants/urls";
import { setWeatherImage } from "../common/functions/imageFunctions";

const FavoriteItem = ({ data }) => {
  return (
    <div className="col" style={{ textAlign: "center", color: "black" }}>
      <div>{data.name}</div>
      <div>
        {data.currentWeather.Temperature.Metric.Value}{" "}
        {data.currentWeather.Temperature.Metric.Unit}
      </div>
      <img
        src={`${iconUrls.WEATHER_URL_PREFIX}${setWeatherImage(
          data.currentWeather.WeatherIcon
        )}${iconUrls.WEATHER_URL_SUFFIX}`}
        alt={data.currentWeather.WeatherIcon}
      />
      <div>{data.currentWeather.WeatherText}</div>
    </div>
  );
};

export default FavoriteItem;
