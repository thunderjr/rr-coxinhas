import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import Cart, { AddressData } from '../types/Cart'

const initialState: Cart = {
  products: [],
  address: {} as AddressData,
  payment: 'Dinheiro'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [...state.products, action.payload]
      }
    case 'REMOVE_PRODUCT':
      return {
        ...state,
        products: state.products.filter(x => x.id !== action.payload)
      }
    case 'INCREMENT_PRODUCT':
      return (() => {
        const index = state.products.findIndex(x => x.id === action.payload)
        
        if (state.products[index].qtd + 1 === 10) {
          return state
        }

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
        
        if (state.products[index].qtd - 1 === 0) {
          return {
            ...state,
            products: state.products.filter(x => x.id !== action.payload)
          }
        }

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
    case 'SET_PAYMENT':
      return {
        ...state,
        payment: action.payload
      }
    default:
      return state
  }
}

export const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware()))