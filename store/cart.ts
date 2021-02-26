import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import Cart from '../types/Cart'
import propTypes from './../types/CardapioEntry'

const initialState: Cart = {
  products: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      const _products = state.products
      _products.push(action.payload)
      return {
        ...state,
        products: _products
      }
    default:
      return state
  }
}

export const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware()))