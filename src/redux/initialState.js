export function initialCityWeather() {
  const fetchData = async () => {
    try {
      const res = await fetch("https://swapi.dev/api/people/1/");
      const json = await res.json();
      return json;
    } catch (error) {
      return error;
    }
  };
  return fetchData();
}
