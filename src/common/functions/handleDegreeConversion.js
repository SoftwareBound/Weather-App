export function fahrToCelNumber(degree) {
  return Number.parseFloat((degree - 32) * 0.5556).toFixed(1);
}

export function fahrToCelText(text) {
  return "C";
}
