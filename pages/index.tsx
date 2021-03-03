import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import useTotal from '../hooks/useTotal'
import cardapio from '../services/cardapio'

import Cart from '../types/Cart'
import MainContainer from './../components/MainContainer'
import CardapioEntry from './../components/CardapioEntry'
import AddressInput from '../components/AddressInput'

export default function Home() {
  const dispatch = useDispatch()
  const cart = useSelector((state: Cart) => state)
  const total = useTotal(cart)

  const [localAddr, setLocalAddr] = useState('')

  useEffect(() => {
    dispatch({
      type: 'SET_ADDRESS',
      payload: {
        // SET FOR FULL ADDRESS
      }
    })
  }, [localAddr])

  return (
    <MainContainer label="Cardapio">
      <div className="w-full flex flex-col md:w-3/5">
        {cardapio.map(cardapioEntry => <CardapioEntry key={cardapioEntry.name} {...cardapioEntry} />)}
      </div>

      <div id="checkout" className="text-black my-4">
        <div className="flex flex-row space-x-4">
          <div>
            <h2 className="text-white text-xl tracking-wide font-normal font-akaya">Endereço:</h2>
            <AddressInput setAddr={setLocalAddr} />
          </div>
          <div>
            <h2 className="text-white text-xl tracking-wide font-normal font-akaya">Endereço:</h2>
            <AddressInput setAddr={setLocalAddr} />
          </div>
        </div>
        <h3 className="text-white">{total}</h3>
      </div>

      <button className="bg-white text-red-600 border-red-300 border-2 py-2 px-8 mt-6 w-7/12 md:w-3/12 focus:outline-none font-bold rounded-full tracking-wide">AGENDAR PEDIDO</button>
      <button className="bg-gradient-to-r from-green-400 via-green-500 to-green-400 py-2 px-8 mt-2 w-7/12 md:w-3/12 focus:outline-none font-bold rounded-full tracking-wide">PEDIR AGORA</button>
    </MainContainer>
  )
}
