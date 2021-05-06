import { iconsList } from "../../constants/icons";
import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import "./style.css";
import {
  SearchBox,
  SearchBoxInput,
  SearchBoxInputIcons,
} from "../../../global";
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

  const setSearchedData = (key, name, country) => {
    dispatch(loadCurrentCityWeather(key, name, country));
    setText(name);
    setSelectedCityData([]);
  };
  const checkStateorCountry = (city) => {
    return city.LocalizedName === city.AdministrativeArea.LocalizedName
      ? city.Country.LocalizedName
      : city.AdministrativeArea.LocalizedName;
  };
  return (
    <div className="search-container">
      <Dropdown>
        <SearchBox>
          <Dropdown.Toggle
            variant="primary"
            id="dropdown-basic"
            aria-expanded="true"
          >
            <SearchBoxInput
              type="text"
              placeholder="Start typing city name"
              onChange={(e) => setText(e.target.value)}
              value={value}
              className="search-input"
            />
            <SearchBoxInputIcons>
              {text.length === 0 ? (
                <span>{iconsList.SEARCH_ICON}</span>
              ) : (
                <span onClick={() => setText("")}>{iconsList.X_ICON}</span>
              )}
            </SearchBoxInputIcons>
          </Dropdown.Toggle>
        </SearchBox>

        {text.length > 0 ? (
          <Dropdown.Menu>
            {cityArr.map((city) => (
              <Dropdown.Item
                key={city.Key}
                onClick={() =>
                  setSearchedData(
                    city.Key,
                    city.LocalizedName,
                    city.Country.LocalizedName
                  )
                }
              >
                {` ${city.LocalizedName}, ${city.Country.LocalizedName}`}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        ) : null}
      </Dropdown>
    </div>
  );
};

export default Search;
