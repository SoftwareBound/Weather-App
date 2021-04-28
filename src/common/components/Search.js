import { iconsList } from "../constants/icons";
import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { autoSearchTel } from "../../mockData";
import Dropdown from "react-bootstrap/Dropdown";
import { getData } from "../functions/getDataFromApi";
import { searchUrls, apiKeyUrls, weatherUrls } from "../constants/urls";
import { useDispatch } from "react-redux";
import { setSelectedCityData } from "../../redux/actions/weatherActions";
import { weatherActions } from "../constants/actionType";

const Search = () => {
  const [text, setText] = useState("");
  const [value] = useDebounce(text, 500);
  const [cityArr, setCityArr] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (text) {
      if (!/[a-zA-Z]/.test(text.charAt(text.length - 1))) {
        alert("not an english letter,please correct");
      }
    }

    if (value.length) {
      getData(
        `${searchUrls.AUTO_COMPLETE_CITY_SEARCH}${apiKeyUrls.APIKEY_URL}&q=${value}`
      ).then((res) => setCityArr(res));
    } else {
      setSelectedCityData([]);
    }
  }, [value]);

  const setSearchedData = (key, name) => {
    getData(
      `${weatherUrls.CITY_CURRENT_WEATHER}${key}${apiKeyUrls.APIKEY_URL}`
    ).then(function (weather) {
      dispatch({
        type: weatherActions.LOAD_CITY_WEATHER,
        payload: {
          cityDetails: {
            name: name,
            id: key,
          },
          currentWeather: weather[0],
        },
      });
      getData(
        `${weatherUrls.CITY_FIVE_DAY_FORECAST}${key}${apiKeyUrls.APIKEY_URL}`
      )
        .then((res) =>
          dispatch({
            type: weatherActions.LOAD_CITY_WEATHER_FORECAST,
            payload: res,
          })
        )
        .catch((error) => alert(`forecast fetch error ${error}`));
    });
    setText(name);
  };
  return (
    <div style={{ position: "relative" }}>
      <Dropdown>
        <Dropdown.Toggle
          variant="primary"
          id="dropdown-basic"
          style={{ width: "400px", backgroundColor: "#e3f2fd" }}
          aria-expanded="true"
        >
          <input
            type="text"
            placeholder="Start typing city name"
            onChange={(e) => setText(e.target.value)}
            style={{ float: "left", minWidth: "98%" }}
            value={value}
          />
          <span
            style={{
              position: "absolute",
              right: "30px",
              color: "black",
            }}
          >
            {text.length === 0 ? (
              <span>{iconsList.SEARCH_ICON}</span>
            ) : (
              <span onClick={() => setText("")}>{iconsList.X_ICON}</span>
            )}
          </span>
        </Dropdown.Toggle>

        {text.length > 0 ? (
          <Dropdown.Menu>
            {cityArr.map((city) => (
              <Dropdown.Item
                key={city.Key}
                onClick={() => setSearchedData(city.Key, city.LocalizedName)}
              >
                {city.LocalizedName}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        ) : null}
      </Dropdown>
    </div>
  );
};

export default Search;
