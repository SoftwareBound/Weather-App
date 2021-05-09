import React from "react";
import { parseDate } from "../common/functions/dateFunctions";
import { iconUrls } from "../common/constants/urls";
import { setWeatherImage } from "../common/functions/imageFunctions";
import { checkDegreeScale } from "../common/functions/handleDegreeConversion";
import { useSelector } from "react-redux";

const ForecastItem = ({ data }) => {
  const scale = useSelector((state) => state.scaleReducer);

  return (
    <div>
      {parseDate(data.Date).map((date, index) => (
        <div key={index}>{date}</div>
      ))}
      {checkDegreeScale(
        scale,
        data.Temperature.Maximum.Value,
        data.Temperature.Maximum.Unit
      )}

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
