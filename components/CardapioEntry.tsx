import propTypes from './../types/CardapioEntry'
import Image from 'next/Image'

export default function CardapioEntry(props: propTypes) {
  const formatMoney = (val: number) => Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', unitDisplay: ',' }).format(val)
  return (
    <div className="flex justify-between">
      {props.imageURL !== '' ? <Image src={props.imageURL} width="" height="" /> : null}
      <p className="font-semibold">{props.name}</p>
      <p className="font-semibold">{formatMoney(props.price)}</p>
    </div>
  )
}