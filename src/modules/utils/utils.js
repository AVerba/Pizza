export const getQntOrder = (obj) => {
  let quantity = 0;
  for (let key in obj) {
    quantity += obj[key].quantity;
  }
  return quantity;
}
