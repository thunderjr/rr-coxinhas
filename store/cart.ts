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
      return {
        ...state,
        products: [...state.products, action.payload]
      }
    case 'INCREMENT_PRODUCT':
      return (() => {
        const index = state.products.findIndex(x => x.id === action.payload)
        const newArray = [...state.products]
        Object.assign(newArray[index], { qtd: state.products[index].qtd + 1 })
        return {
          ...state,
          products: newArray
        }
      })()
    case 'DECREMENT_PRODUCT':
      return (() => {
        const index = state.products.findIndex(x => x.id === action.payload)
        const newArray = [...state.products]
        Object.assign(newArray[index], { qtd: state.products[index].qtd - 1 })
        return {
          ...state,
          products: newArray
        }
      })()
    default:
      return state
  }
}

export const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware()))