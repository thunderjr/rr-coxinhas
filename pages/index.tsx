import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import useTotal from '../hooks/useTotal'
import cardapio from '../services/cardapio'
import Cart from '../types/Cart'

import Divider from './../components/Divider'
import MainContainer from './../components/MainContainer'
import CardapioEntry from './../components/CardapioEntry'
import AddressInput from '../components/AddressInput'
import CEPInput from '../components/CEPInput'

export default function Home() {
  const dispatch = useDispatch()
  const cart = useSelector((state: Cart) => state)
  const total = useTotal(cart)

  const [localAddr, setLocalAddr] = useState('')
  const [showCEP, setCEP] = useState(false)
  const toggleCEP = e => { e.preventDefault(); setCEP(!showCEP) }

  useEffect(() => {
    dispatch({
      type: 'SET_ADDRESS',
      payload: {
        // SET FOR FULL ADDRESS
      }
    })
  }, [localAddr])

  return (
    <MainContainer>
      
      <Divider label="Cardápio" />

      <div className="w-full md:w-3/5 flex flex-col">
        {cardapio.map(cardapioEntry => <CardapioEntry key={cardapioEntry.name} {...cardapioEntry} />)}
      </div>

      <Divider label="Entrega" />
      <div id="checkout" className="flex flex-col text-black mt-3 px-2 w-full md:w-2/5">
        <button className="text-white font-semibold self-center px-4 py-2 bg-black bg-opacity-30 rounded-full" onClick={toggleCEP}>{ showCEP ? 'Remover CEP' : 'Pesquisar por CEP' }</button>

        <div className="px-2">          
          <div className="space-y-1">
            { showCEP && 
              <div className="flex flex-col pb-4">
                <h2 className="text-white text-lg tracking-wide font-normal font-akaya">CEP:</h2>
                <CEPInput setAddr={setLocalAddr} />
              </div>
            }

            <div className="flex flex-col">
              <h2 className="text-white text-lg tracking-wide font-normal font-akaya">Endereço:</h2>
              <AddressInput value={localAddr} setAddr={setLocalAddr} />
            </div>

            <div className="flex flex-col">
              <h2 className="text-white text-lg tracking-wide font-normal font-akaya">Número:</h2>
              <input type="text" className="flex-1" onChange={() => {}} />
            </div>

            <div className="flex flex-col">
              <h2 className="text-white text-lg tracking-wide font-normal font-akaya">Complemento:</h2>
              <input type="text" className="flex-1" onChange={() => {}} />
            </div>
          </div>
        </div>
        
        <h3 className="text-white">{total}</h3>
      </div>

      <button className="bg-white text-red-600 border-red-300 border-2 py-2 px-8 mt-6 w-7/12 md:w-3/12 focus:outline-none font-bold rounded-full tracking-wide">AGENDAR PEDIDO</button>
      <button className="bg-gradient-to-r from-green-400 via-green-500 to-green-400 py-2 px-8 mt-2 w-7/12 md:w-3/12 focus:outline-none font-bold rounded-full tracking-wide">PEDIR AGORA</button>
    </MainContainer>
  )
}
