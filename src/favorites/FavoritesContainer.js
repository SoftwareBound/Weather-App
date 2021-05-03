import React from "react";
import { connect } from "react-redux";
import FavoriteItem from "./FavoriteItem";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loadCurrentCityWeather } from "../redux/actions/weatherActions";
import "./style.css";
const FavoritesContainer = ({ favorites }) => {
  const dispatch = useDispatch();
  const setFavouriteCity = (city) => {
    dispatch(loadCurrentCityWeather(city.id, city.name));
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
const mapStateToProps = (state) => {
  return {
    favorites: state.favoritesReducer,
  };
};
export default connect(mapStateToProps)(FavoritesContainer);
