function mango(quantity, price) {
  let discount = quantity / 3;
  let discountNumber = Math.floor(discount);
  return quantity * price - discountNumber * price;
}
