export const fetchProduct = (data) => {
  console.log(data);
  return {
    type: "SET_PRODUCTS",
    payload: data.data,
  };
};
