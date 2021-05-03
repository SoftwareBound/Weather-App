import { iconsList } from "../../constants/icons";
import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import "./style.css";
import Dropdown from "react-bootstrap/Dropdown";
import { getData } from "../../functions/getDataFromApi";
import { searchUrls, apiKeyUrls, weatherUrls } from "../../constants/urls";
import { useDispatch } from "react-redux";
import { setSelectedCityData } from "../../../redux/actions/weatherActions";

import { loadCurrentCityWeather } from "../../../redux/actions/weatherActions";

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
      (async function () {
        const dataFromSearch = await getData(
          `${searchUrls.AUTO_COMPLETE_CITY_SEARCH}${apiKeyUrls.APIKEY_URL}&q=${value}`
        );
        setCityArr(dataFromSearch);
      })();
    } else {
      setSelectedCityData([]);
    }
  }, [value]);

  const setSearchedData = (key, name) => {
    dispatch(loadCurrentCityWeather(key, name));
    setText(name);
  };
  return (
    <div className="search-container">
      <Dropdown>
        <Dropdown.Toggle
          variant="primary"
          id="dropdown-basic"
          aria-expanded="true"
        >
          <input
            type="text"
            placeholder="Start typing city name"
            onChange={(e) => setText(e.target.value)}
            value={value}
            className="search-input"
          />
          <span className="search-icon">
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
