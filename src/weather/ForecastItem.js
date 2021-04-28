import React from "react";
import { parseDate } from "../common/functions/dateFunctions";
import { iconUrls } from "../common/constants/urls";
import { setWeatherImage } from "../common/functions/imageFunctions";
import {
  fahrToCelNumber,
  fahrToCelText,
} from "../common/functions/handleDegreeConversion";

const ForecastItem = ({ data }) => {
  return (
    <div>
      {parseDate(data.Date).map((date, index) => (
        <div key={index}>{date}</div>
      ))}
      {fahrToCelNumber(data.Temperature.Maximum.Value)}{" "}
      {fahrToCelText(data.Temperature.Minimum.Unit)}
      <div>
        <img
          src={`${iconUrls.WEATHER_URL_PREFIX}${setWeatherImage(
            data.Day.Icon
          )}${iconUrls.WEATHER_URL_SUFFIX}`}
          alt={data.Day.IconPhrase}
        />
      </div>
    </div>
  );
};

export default ForecastItem;
