function dashatize(num) {
  return isNaN(num)
    ? "NaN"
    : num
        .toString()
        .match(/([13579]|[02468]+)/g)
        .join("-");
}
