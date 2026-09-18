const convertToCelsius = function(f) {
  return +Number.parseFloat((f - 32) * 5/9).toFixed(1);
};

const convertToFahrenheit = function(c) {
  return +Number.parseFloat(c * 9/5 + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
