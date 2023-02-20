const initailValue = {
  products: [],
};

const productReducer = (state = initailValue, { type, payload }) => {
  switch (type) {
    case "SET_PRODUCTS":
      return { products: payload };
    default:
      return state;
  }
};
export default productReducer;
