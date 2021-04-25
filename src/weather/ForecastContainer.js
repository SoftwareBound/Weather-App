import React, { useEffect, useState } from "react";
import ForecastHeader from "./ForecastHeader";
import { urls } from "../common/constants/urls";
import { connect } from "react-redux";
import { getCityData } from "../common/functions/getDataFromApi";

const ForecastContainer = ({ currentCity }) => {
  //here i make an api call get current forcast for tel aviv
  const [currentCityForecast, setCurrentCityForecast] = useState({
    cityName: "Tel Aviv",
    value: "32",
    unit: "C",
    icon: `${urls.WEATHER_URL_PREFIX}01${urls.WEATHER_URL_SUFFIX}`,
    description: "Sunny",
  });
  useEffect(() => {
    console.log(Object.values(currentCity));
    if (!Object.values(currentCity)) {
      console.log("inside  if");
      getCityData().then((res) => console.log(res));
    }
  }, []);

  return (
    <div className="container">
      <div className="row" style={{ marginTop: "15px" }}>
        <ForecastHeader currentCityData={currentCityForecast} />
      </div>
      <div
        className="row"
        style={{
          justifyContent: "center",
          marginTop: "5%",
          fontSize: "xx-large",
        }}
      >
        {currentCityForecast.description}
      </div>
      <div
        className="row"
        style={{
          textAlign: "center",
          margin: "auto",
          paddingBlockStart: "10%",
        }}
      >
        <div className="col">Day 1</div>
        <div className="col">Day 2</div>
        <div className="col">Day 3</div>
        <div className="col">Day 4</div>
        <div className="col">Day 5</div>
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
