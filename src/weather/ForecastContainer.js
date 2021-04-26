import React, { useEffect } from "react";
import ForecastHeader from "./ForecastHeader";
import { currentCityData, currentCityWeather, fiveDay } from "../mockData";
import { connect } from "react-redux";
import { getData } from "../common/functions/getDataFromApi";
import { useDispatch } from "react-redux";
import { defaultCityDetails } from "../common/constants/titles";
import { weatherActions } from "../common/constants/actionType";
import { weatherUrls, apiKeyUrls } from "../common/constants/urls";
import {
  getFormatedDayText,
  getFormatedMonth,
} from "../common/functions/getFormatedDate";
import { iconUrls } from "../common/constants/urls";
const ForecastContainer = ({ currentCity }) => {
  //here i make an api call get current forcast for tel aviv
  const dispatch = useDispatch();
  //Fot fetching current weather mock
  useEffect(() => {
    if (!Object.values(currentCity).length) {
      ///working with mock
      dispatch({
        type: weatherActions.LOAD_CITY_WEATHER,
        payload: {
          cityDetails: {
            name: defaultCityDetails.DEFAULT_CITY_NAME,
            id: defaultCityDetails.DEFAULT_CITY_ID,
          },
          currentWeather: currentCityWeather[0],
        },
      });

      /* getData(
        `${weatherUrls.CITY_CURRENT_WEATHER}${defaultCityDetails.DEFAULT_CITY_ID}${apiKeyUrls.APIKEY_URL}`
      )
        .then((res) =>
          dispatch({
            type: weatherActions.LOAD_DEFAULT_CITY_WEATHER,
            payload: {
              cityDetails: {
                name: defaultCityDetails.DEFAULT_CITY_NAME,
                id: defaultCityDetails.DEFAULT_CITY_ID,
              },
              currentWeather: res[0],
            },
          })
        )
        .catch((error) => alert(error)); */

      //Fot fetching forecast weather mock
      dispatch({
        type: weatherActions.LOAD_CITY_WEATHER_FORECAST,
        payload: fiveDay,
      });

      //REAL API CALL

      /* getData(
        `${weatherUrls.CITY_FIVE_DAY_FORECAST}${defaultCityDetails.DEFAULT_CITY_ID}${weatherUrls.APIKEY_SUFFIX_URL}`
      )
        .then((res) =>
          dispatch({
            type: weatherActions.LOAD_DEFAULT_CITY_WAETHER_FORECAST,
            payload: res,
          })
        )
        .catch((error) => alert(error)); */
    }
    console.log(currentCity);
  }, [currentCity]);

  //for fetching five day forcast
  useEffect(() => {});
  if (Object.values(currentCity).length < 2) {
    return <div>Loading</div>;
  }
  const parseDate = (date) => {
    const newDate = new Date(date);
    const dayText = getFormatedDayText(newDate.getDay());
    const dateArr = ` ${newDate.getDate()}/${getFormatedMonth(
      newDate.getMonth()
    )}`;
    return [dayText, dateArr];
  };
  return (
    <div className="container">
      <div className="row" style={{ marginTop: "15px" }}>
        <ForecastHeader currentCityData={currentCity} />
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
          paddingBlockStart: "10%",
        }}
      >
        {fiveDay.DailyForecasts.map((day) => {
          return (
            <div
              key={day.Date}
              className="col"
              style={{ border: "ridge", marginRight: "10px" }}
            >
              {parseDate(day.Date).map((date, index) => (
                <div key={index}>{date}</div>
              ))}
              {day.Temperature.Maximum.Value}
              {day.Temperature.Minimum.Unit}
              <div>
                <img
                  src={`${iconUrls.WEATHER_URL_PREFIX}${
                    day.Day.Icon < 10 ? `0${day.Day.Icon}` : `${day.Day.Icon}`
                  }${iconUrls.WEATHER_URL_SUFFIX}`}
                  alt={day.Day.IconPhrase}
                  /*  style={{ marginRight: "20px", border: "outset" }} */
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    currentCity: state,
  };
};

export default connect(mapStateToProps)(ForecastContainer);
