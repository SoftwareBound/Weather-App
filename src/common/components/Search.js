import { iconsList } from "../constants/icons";
import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { autoSearchTel } from "../../mockData";
import Dropdown from "react-bootstrap/Dropdown";
import { getData } from "../functions/getDataFromApi";
import { searchUrls, apiKeyUrls } from "../constants/urls";
import { useDispatch } from "react-redux";
import { setSelectedCityData } from "../../redux/actions";

const Search = () => {
  const [text, setText] = useState("");
  const [value] = useDebounce(text, 500);
  const [cityArr, setCityArr] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (value.length) {
      getData(
        `${searchUrls.AUTO_COMPLETE_CITY_SEARCH}${apiKeyUrls.APIKEY_URL}&q=${value}`
      ).then((res) => setCityArr(res));
    } else {
      setSelectedCityData([]);
    }
  }, [value]);

  return (
    <div style={{ position: "relative" }}>
      <Dropdown>
        <Dropdown.Toggle
          variant="primary"
          id="dropdown-basic"
          style={{ width: "400px", backgroundColor: "#e3f2fd" }}
        >
          <input
            type="text"
            placeholder="Start typing city name"
            onChange={(e) => setText(e.target.value)}
            style={{ float: "left", minWidth: "98%" }}
            value={text}
          />
        </Dropdown.Toggle>
        <span
          style={{
            position: "absolute",
            right: "30px",
            color: "black",
            marginTop: "2%",
          }}
        >
          {text.length === 0 ? (
            <span>{iconsList.SEARCH_ICON}</span>
          ) : (
            <span onClick={() => setText("")}>{iconsList.X_ICON}</span>
          )}
        </span>
        {text.length > 0 ? (
          <Dropdown.Menu>
            {cityArr.map((city) => (
              <Dropdown.Item
                key={city.Key}
                onClick={() =>
                  dispatch(setSelectedCityData(city.Key, city.LocalizedName))
                }
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
