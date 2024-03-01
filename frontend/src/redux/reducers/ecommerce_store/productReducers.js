import {
  GET_ALL_PRODUCTS_ERROR,
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from '../../constants/ecommerce_store/product.js'

export const getAllProducts = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS_REQUEST:
      return { loading: true }
    case GET_ALL_PRODUCTS_SUCCESS:
      return { loading: false, data: action.payload }
    case GET_ALL_PRODUCTS_ERROR:
      return { loading: false, error: action.error }
    default:
      return state
  }
}

export const getProduct = (state = {}, action) => {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return { loading: true }
    case GET_PRODUCT_SUCCESS:
      return { loading: false, data: action.payload }
    case GET_PRODUCT_ERROR:
      return { loading: false, error: action.error }
    default:
      return state
  }
}
