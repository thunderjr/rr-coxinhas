import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import cardapio from '../services/cardapio'
import Cart from '../types/Cart'
import cities from './../cities.json'
import useTotal from '../hooks/useTotal'

import AddressInput from '../components/AddressInput'
import CardapioEntry from './../components/CardapioEntry'
import CEPInput from '../components/CEPInput'
import Divider from './../components/Divider'
import Label from '../components/Label'
import MainContainer from './../components/MainContainer'

export default function Home() {
  const dispatch = useDispatch()
  const cart = useSelector((state: Cart) => state)
  const total = useTotal(cart)
  
  const addrData = useSelector((state: Cart) => state.address)

  const [localNum, setLocalNum] = useState('')
  const [localComplemento, setLocalComp] = useState('')
  const [localBairro, setLocalBairro] = useState('')
  const [localCidade, setLocalCidade] = useState('Sao Paulo')

  const [showCEP, setCEP] = useState(false)
  const toggleCEP = e => { e.preventDefault(); setCEP(!showCEP) }

  useEffect(() => {
    dispatch({
      type: 'SET_ADDRESS',
      payload: {
        numero: localNum,
        complemento: localComplemento,
        bairro: localBairro,
        cidade: localCidade
      }
    })
  }, [localNum, localComplemento, localCidade])

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
          <div className="space-y-2">
            { showCEP && 
              <div className="flex flex-col pb-4">
                <Label>CEP</Label>
                <CEPInput />
              </div>
            }
            
            <div className="flex flex-col pb-2">
              <Label>Cidade</Label>
              <select className="flex-1" value={addrData.cidade} onChange={e => setLocalCidade(e.target.value)}>
                { Array.from(cities).map((city, i) =>
                  <option value={city} key={`city-${i}`}>{city}</option>
                )}
              </select>
            </div>

            <div className="flex flex-col">
              <Label>Endereço</Label>
              <AddressInput />
            </div>
            
            <div className="flex flex-col pb-2">
              <Label>Número</Label>
              <input type="text" className="flex-1" onChange={e => setLocalNum(e.target.value)} />
            </div>
            
            <div className="flex flex-col">
              <Label>Bairro</Label>
              <input type="text" className="flex-1" value={addrData.bairro} onChange={e => setLocalBairro(e.target.value)} />
            </div>

            <div className="flex flex-col">
              <Label>Complemento</Label>
              <input type="text" className="flex-1" onChange={e => setLocalComp(e.target.value)} />
            </div>
          </div>
        </div>
      </div>

      <button className="bg-white text-red-600 border-red-300 border-2 py-2 px-8 mt-6 w-7/12 md:w-3/12 focus:outline-none font-bold rounded-full tracking-wide">AGENDAR PEDIDO</button>
      <button className="bg-gradient-to-r from-green-400 via-green-500 to-green-400 py-2 px-8 mt-2 w-7/12 md:w-3/12 focus:outline-none font-bold rounded-full tracking-wide">PEDIR AGORA</button>
    </MainContainer>
  )
}
