export function fahrToCelNumber(degree) {
  return Number.parseFloat((degree - 32) * 0.5556).toFixed(1);
}

export function fahrToCelText() {
  return "C";
}

export function celToFahrNumber(degree) {
  return Number.parseFloat(degree * 1.8 + 32).toFixed(1);
}

export function celToFahrText() {
  return "F";
}
export function isMetric(scale) {
  if (scale === "C") {
    return true;
  }
  return false;
}
export function checkDegreeScale(scale, value, unit) {
  if (scale === "C") {
    if (isMetric(unit)) {
      return [value, " ", unit];
    } else {
      return [fahrToCelNumber(value), " ", fahrToCelText()];
    }
  } else {
    if (isMetric(unit)) {
      return [celToFahrNumber(value), " ", celToFahrText()];
    } else {
      return [value.toFixed(1), " ", unit];
    }
  }
}
