export async function getCityData() {
  const data = await fetch("https://swapi.dev/api/people/1/");
  const jsonData = await data.json();
  console.log(jsonData);
  return jsonData;
}
