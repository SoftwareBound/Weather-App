import React, { useEffect } from "react";
import ForecastHeader from "./ForecastHeader";
import { currentCityData, currentCityWeather, fiveDay } from "../mockData";
import { connect } from "react-redux";
import { getCurrentCityData } from "../common/functions/getDataFromApi";
import { useDispatch } from "react-redux";
import { defaultCityName } from "../common/constants/titles";
import { weatherActions } from "../common/constants/actionType";
import { getFormatedDayText } from "../common/functions/getFormatedDate";
const ForecastContainer = ({ currentCity }) => {
  //here i make an api call get current forcast for tel aviv
  const dispatch = useDispatch();

  useEffect(() => {
    if (!Object.values(currentCity).length) {
      dispatch({
        type: weatherActions.LOAD_DEFAULT_CITY_WAETHER,
        payload: {
          cityName: defaultCityName.DEFAULT_CITY_NAME,
          currentWeather: currentCityWeather[0],
        },
      });

      //REAL API CALL
      /* getCurrentCityData(
        `${weatherUrls.CITY_CURRENT_WEATHER}${cityUrls.DEFAULT_CITY_WEATHER_ID}${weatherUrls.APIKEY_SUFFIX_URL}`
      ).then((res) => dispatch({ type: "test", payload: res })); */
    }
    console.log(currentCity);
  }, [currentCity]);
  if (!Object.values(currentCity).length) {
    return <div>Loading</div>;
  }
  const parseDate = (date) => {
    const newDate = new Date(date);
    return getFormatedDayText(newDate.getDay());
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
              <div>{parseDate(day.Date)}</div>
              {Number.parseInt(
                (day.Temperature.Minimum.Value +
                  day.Temperature.Maximum.Value) /
                  2
              )}{" "}
              {day.Temperature.Minimum.Unit}
            </div>
          );
        })}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    currentCity: state,
  };
};

export default connect(mapStateToProps)(ForecastContainer);
