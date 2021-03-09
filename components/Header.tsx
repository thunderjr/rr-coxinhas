
import { useSelector } from 'react-redux'
import Cart from '../types/Cart'
import Image from 'next/image'
import useTotal from '../hooks/useTotal'

export default function Header() {
  const cart = useSelector((state: Cart) => state)
  const total = useTotal(cart)

  return (
    <div className="w-11/12 mb-2 mx-10 pr-2 flex items-center justify-between">
      <Image src="/logo.png" width={586 / 3} height={296 / 3} />
      <div className="relative">
        <Image className="filter-invert opacity-90 cursor-pointer" src="/cart-icon.svg" width={35} height={35} />
        <div className="absolute bottom-0 -right-2 h-5 w-5 my-1 border-2 border-white rounded-full bg-black text-white text-xs z-2 grid place-items-center leading-3">
          { cart.products.length }
        </div>
        <p className="absolute top-10 right-0 tracking-tighter leading-4">{ Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total) }</p>
      </div>
    </div>
  )
}