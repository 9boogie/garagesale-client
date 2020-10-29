import {
  CREATE_SALE,
  GET_ALL_SALES,
  GET_SALE_DATA,
  GET_PRODUCT_DATA,
  GET_USER_DATA,
  CREATE_PRODUCT
} from './types';

const appReducer = (state, { type, payload }) => {
  if (type === GET_ALL_SALES) {
    return {
      ...state,
      sales: payload.listOfSales
    };
  }

  if (type === CREATE_SALE) {
    return {
      ...state,
      sales: [payload.sale, ...state.sales]
    };
  }

  if (type === GET_SALE_DATA) {
    return {
      ...state,
      sales: state.sales,
      saleData: payload.garageData
    };
  }

  if (type === GET_PRODUCT_DATA) {
    return {
      ...state,
      products: payload.productData
    };
  }

  if (type === GET_USER_DATA) {
    return {
      ...state,
      loginUser: payload.userData
    };
  }
  if (type === CREATE_PRODUCT) {
    return {
      ...state,
      saleData: [payload.product, ...state.saleData]
    };
  }

  return state;
};

export default appReducer;
