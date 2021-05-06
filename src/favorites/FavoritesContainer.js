import React from "react";
import { useSelector, useDispatch } from "react-redux";
import FavoriteItem from "./FavoriteItem";
import { Link } from "react-router-dom";
import { loadCurrentCityWeather } from "../redux/actions/weatherActions";
import "./style.css";
const FavoritesContainer = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favoritesReducer);
  const setFavouriteCity = (city) => {
    dispatch(loadCurrentCityWeather(city.id, city.name, city.country));
  };

  return (
    <div className="row favourite-container">
      {favorites.map((city) => (
        <div
          className="col-1 city-item-container"
          key={city.id}
          onClick={() => setFavouriteCity(city)}
        >
          <Link to="/" className="link-item">
            <FavoriteItem data={city} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FavoritesContainer;
