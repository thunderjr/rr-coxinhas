import { useDispatch, useSelector } from 'react-redux'
import cardapio from '../services/cardapio'
import CartTree from '../types/CartTree'

import MainContainer from './../components/MainContainer'
import CardapioEntry from './../components/CardapioEntry'

export default function Home() {
  const dispatch = useDispatch()
  // const count = useSelector((state: CartTree) => state)

  const increment = () => dispatch({ type: 'ADD_PRODUCT' })

  return (
    <MainContainer label="Cardápio">
      {cardapio.map(cardapioEntry => <CardapioEntry {...cardapioEntry} />)}
    </MainContainer>
  )
}
