import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import Cart, { AddressData } from '../types/Cart'

const initialState: Cart = {
  products: [],
  address: {} as AddressData
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
      // SHOULD REMOVE PRODUCT IF QTD IS 0

      return (() => {
        const index = state.products.findIndex(x => x.id === action.payload)
        const newArray = [...state.products]
        Object.assign(newArray[index], { qtd: state.products[index].qtd - 1 })
        return {
          ...state,
          products: newArray
        }
      })()
    case 'SET_ADDRESS':
      return { 
        ...state,
        address: {
          ...state.address,
          ...action.payload
        }
      }
    default:
      return state
  }
}

export const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware()))