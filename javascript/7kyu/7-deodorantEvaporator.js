function evaporator(content, evap_per_day, threshold) {
  let result = 0;
  let percentage = 100;
  while (percentage > threshold) {
    percentage = percentage - percentage * (evap_per_day / 100);
    result += 1;
  }
  return result;
}
