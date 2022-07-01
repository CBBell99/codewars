function calculator(a, b, sign) {
  try {
    return eval(a + sign + b);
  } catch (e) {
    return "unknown value";
  }
}
