import { useState } from 'react'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import * as CurrencyFormat from 'react-currency-format'

import Cart from '../types/Cart'
import propTypes from './../types/CardapioEntry'

const LineBreakText = ({ text, className }) => text.split('\n').map((x, i) => <p key={x + i} className={className}>{x}</p>)

const AddRemoveButton = ({ itemIsInCart }) => {
  return (
    <button name={itemIsInCart ? "removeButton" : "addButton"} className="ml-auto px-4 h-8 rounded-full bg-black bg-opacity-10 backdrop-blur focus:outline-none text-sm">{ itemIsInCart ? "Remover" : "Adicionar" }</button>
  )
}

export default function CardapioEntry(props: propTypes) {
  const [expanded, setExpanded] = useState(false)
  const dispatch = useDispatch()
  
  const searchInCart = (state: Cart) => state.products.find(x => x.id === props.id)
  const itemIsInCart = !!useSelector(searchInCart)
  const qtd = useSelector(searchInCart)?.qtd || 0

  const clickHandler = e => {
    if (e.target.name === 'addButton') {
      dispatch({ type: 'ADD_PRODUCT', payload: { ...props, qtd: qtd === 0 ? 1 : qtd  } })
      setExpanded(true)
      return
    }

    if (e.target.name === 'removeButton') {
      dispatch({ type: 'REMOVE_PRODUCT', payload: props.id })
      setExpanded(false)
      return
    }

    if (Array.from(e.target.classList).includes('not-triggable')) return;
    
    setExpanded(!expanded)
  }

  return (
    <>
      <div onClick={clickHandler} className={`flex w-full items-center self-center p-4 py-3 my-1 bg-black bg-opacity-40 backdrop-blur ${ expanded ? 'rounded-t-md' : 'rounded-md'}`}>
        <div className="flex items-center justify-center mr-4 w-8">
          { !!props.imageProps.src && <Image {...props.imageProps} /> }
        </div>

        <div className="flex flex-col">
          <p>{props.name}</p>
          <CurrencyFormat className="text-sm font-light" value={props.price} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'R$ '} />
        </div>

        <AddRemoveButton itemIsInCart={itemIsInCart} />
      </div>

      { expanded && 
          <div onClick={clickHandler} className="bg-black bg-opacity-30 backdrop-blur -mt-1 mb-1 px-4 py-4 rounded-b-lg transition duration-500 ease-in-out">
            <div className="flex justify-between">
              <div className="flex flex-col "><LineBreakText className="text-xs font-normal tracking-wide" text={props.description} /></div>

              { itemIsInCart && 
                <div className="flex flex-col">
                  <span className="text-sm self-center">Quantidade</span>
                  
                  <div className="flex my-2">
                    <button name="decrementButton not-triggable" className="flex items-center" onClick={e => dispatch({ type: 'DECREMENT_PRODUCT', payload: props.id })}>
                      <Image src="/minus-circle.svg" height={20} width={20} className="filter-invert not-triggable" />
                    </button>
                    <input className="w-8 mx-2 not-triggable text-black text-center" onChange={e => console.log(e)} value={qtd} type="text" />
                    <button name="incrementButton not-triggable" className="flex items-center" onClick={e => dispatch({ type: 'INCREMENT_PRODUCT', payload: props.id })}>
                      <Image src="/plus-circle.svg" height={20} width={20} className="filter-invert not-triggable" />
                    </button>
                  </div>
                </div>
              }
            </div>
          </div>
      }
    </>
  )
}