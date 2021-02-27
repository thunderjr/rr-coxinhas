import { useDispatch, useSelector } from 'react-redux'
import cardapio from '../services/cardapio'

import Cart from '../types/Cart'
import MainContainer from './../components/MainContainer'
import CardapioEntry from './../components/CardapioEntry'

export default function Home() {
  const dispatch = useDispatch()
  const cart = useSelector((state: Cart) => state)

  const increment = () => dispatch({ type: 'ADD_PRODUCT' })

  return (
    <MainContainer label="Cardapio">
      <div className="w-full flex flex-col md:w-3/5">
        { cardapio.map(cardapioEntry => <CardapioEntry key={cardapioEntry.name} {...cardapioEntry} />) }
      </div>
      <button className="bg-white text-red-600 border-red-300 border-2 py-2 px-8 mt-6 w-7/12 md:w-3/12 focus:outline-none font-bold rounded-full tracking-wide">AGENDAR PEDIDO</button>
      
      <button className="bg-gradient-to-r from-green-400 via-green-500 to-green-400 py-2 px-8 mt-2 w-7/12 md:w-3/12 focus:outline-none font-bold rounded-full tracking-wide">PEDIR AGORA</button>
    </MainContainer>
  )
}
