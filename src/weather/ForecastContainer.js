import React, { useEffect, useState } from "react";
import ForecastHeader from "./ForecastHeader";
import { currentCityData, currentCityWeather, fiveDay } from "../mockData";
import { connect } from "react-redux";
import { getData } from "../common/functions/getDataFromApi";
import { useDispatch } from "react-redux";
import { defaultCityDetails } from "../common/constants/titles";
import { weatherActions } from "../common/constants/actionType";
import { weatherUrls, apiKeyUrls } from "../common/constants/urls";
import { errorMessage } from "../common/constants/titles";
import { getCityWeather } from "../redux/actions/weatherActions";
import { iconUrls } from "../common/constants/urls";

import ForecastItem from "./ForecastItem";

const ForecastContainer = ({ currentCity, favouriteList }) => {
  const dispatch = useDispatch();
  const [city, setCity] = useState({
    cityDetails: {
      name: "Tel Aviv",
      id: "215854",
    },
  });

  useEffect(() => {
    if (!Object.values(currentCity).length) {
      getData(
        `${weatherUrls.CITY_CURRENT_WEATHER}${city.cityDetails.id}${apiKeyUrls.APIKEY_URL}`
      )
        .then(function (weather) {
          dispatch({
            type: weatherActions.LOAD_CITY_WEATHER,
            payload: {
              cityDetails: {
                name: city.cityDetails.name,
                id: city.cityDetails.id,
              },
              currentWeather: weather[0],
            },
          });
          getData(
            `${weatherUrls.CITY_FIVE_DAY_FORECAST}${city.cityDetails.id}${apiKeyUrls.APIKEY_URL}`
          )
            .then((res) =>
              dispatch({
                type: weatherActions.LOAD_CITY_WEATHER_FORECAST,
                payload: res,
              })
            )
            .catch((error) => alert(`${errorMessage} ${error}`));
        })
        .catch((error) => alert(`${errorMessage} ${error}`));
    }
  }, [currentCity]);

  if (Object.values(currentCity).length < 3) {
    return (
      <div class="d-flex align-items-center">
        <strong>Loading...</strong>
        <div
          className="spinner-border ms-auto"
          role="status"
          aria-hidden="true"
        ></div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row" style={{ marginTop: "3%" }}>
        <ForecastHeader
          currentCityData={currentCity}
          favouriteList={favouriteList}
        />
      </div>
      <div
        className="row"
        style={{
          justifyContent: "center",
          marginTop: "5%",
          fontSize: "xx-large",
        }}
      >
        {currentCity.currentWeather.WeatherText}
      </div>
      <div
        className="row"
        style={{
          textAlign: "center",
          margin: "auto",
          paddingBlockStart: "7%",
        }}
      >
        {currentCity.forecast.DailyForecasts.map((day) => {
          return (
            <div
              key={day.Date}
              className="col"
              style={{ border: "ridge", marginRight: "10px" }}
            >
              <ForecastItem data={day} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    currentCity: state.weatherReducer,
    favouriteList: state.favoritesReducer,
  };
};

export default connect(mapStateToProps)(ForecastContainer);
