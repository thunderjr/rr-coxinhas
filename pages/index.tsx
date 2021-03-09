import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import cardapio from '../services/cardapio'
import Cart from '../types/Cart'
import cities from './../cities.json'
import messageSender from '../services/messageSender'
import useTotal from '../hooks/useTotal'

import AddressInput from '../components/AddressInput'
import CardapioEntry from './../components/CardapioEntry'
// import CEPInput from '../components/CEPInput'
import Divider from './../components/Divider'
import Label from '../components/Label'
import MainContainer from './../components/MainContainer'

export default function Home() {
  const dispatch = useDispatch()
  const cart = useSelector((state: Cart) => state)
  const total = useTotal(cart)
  
  const storeCidade = useSelector((state: Cart) => state.address.cidade)
  const storeBairro = useSelector((state: Cart) => state.address.bairro)

  const [localNum, setLocalNum] = useState('')
  const [localComplemento, setLocalComp] = useState('')
  const [localBairro, setLocalBairro] = useState('')
  const [localCidade, setLocalCidade] = useState('Sao Paulo')

  // const [showCEP, setCEP] = useState(false)
  // const toggleCEP = e => { e.preventDefault(); setCEP(!showCEP) }

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
  }, [localBairro, localNum, localComplemento, localCidade])

  return (
    <MainContainer>      
      <Divider label="Cardápio" />
      
      <div className="w-full md:w-3/5 flex flex-col">
        {cardapio.map(cardapioEntry => <CardapioEntry key={cardapioEntry.name} {...cardapioEntry} />)}
      </div>

      <Divider label="Entrega" className="mt-10" />

      <div id="checkout" className="flex flex-col text-black mt-3 px-2 w-full md:w-2/4">
        {/* <button className="text-white font-semibold self-center px-4 py-2 bg-black bg-opacity-30 rounded-full" onClick={toggleCEP}>{ showCEP ? 'Remover CEP' : 'Pesquisar por CEP' }</button> */}

        <div className="px-2">          
          <div className="space-y-2">
            {/* { showCEP && 
              <div className="flex flex-col pb-4">
                <Label>CEP</Label>
                <CEPInput setBairro={setLocalBairro} />
              </div>
            }
             */}
            <div className="flex flex-col pb-2">
              <Label>Cidade</Label>
              <select className="flex-1" value={storeCidade} onChange={e => setLocalCidade(e.target.value)}>
                { Array.from(cities).map((city, i) =>
                  <option value={city} key={`city-${i}`}>{city}</option>
                )}
              </select>
            </div>

            <div className="flex flex-col lg:flex-row pb-2">
              <div className="flex flex-col pb-2 lg:pb-0 lg:flex-1 lg:mr-2">
                <Label>Endereço</Label>
                <AddressInput setBairro={setLocalBairro} />
              </div>
              <div className="flex flex-col">
                <Label>Número</Label>
                <input type="text" className="flex-1 lg:flex-initial" onChange={e => setLocalNum(e.target.value)} />
              </div>
            </div>
            
            <div className="flex flex-col">
              <Label>Bairro</Label>
              <input type="text" className="flex-1" value={localBairro} onChange={e => setLocalBairro(e.target.value)} />
            </div>

            <div className="flex flex-col">
              <Label>Complemento</Label>
              <input type="text" className="flex-1" onChange={e => setLocalComp(e.target.value)} />
            </div>
          </div>
        </div>
        {/* <button className="bg-white text-red-600 border-red-300 border-2 py-2 px-8 mt-6 w-7/12 md:w-3/12 focus:outline-none font-bold rounded-full tracking-wide">AGENDAR PEDIDO</button> */}
        <button onClick={() => messageSender('NOW', cart)} className="bg-gradient-to-r from-green-400 via-green-500 to-green-400 text-white mt-6 py-2 px-8 w-9/12 md:w-5/12 focus:outline-none font-bold rounded-full tracking-wide self-center">
          FINALIZAR PEDIDO
        </button>
      </div>
    </MainContainer>
  )
}
