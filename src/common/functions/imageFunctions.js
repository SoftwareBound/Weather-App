export function setWeatherImage(iconNumber) {
  return iconNumber < 10 ? `0${iconNumber}` : `${iconNumber}`;
}
