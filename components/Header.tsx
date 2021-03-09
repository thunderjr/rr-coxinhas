
import { useSelector } from 'react-redux'
import Cart from '../types/Cart'
import Image from 'next/image'
import useTotal from '../hooks/useTotal'

export default function Header() {
  const cart = useSelector((state: Cart) => state)
  const total = useTotal(cart)

  return (
    <div className="w-11/12 mb-2 mx-10 pl-1 pr-4 md:px-4 flex items-center justify-between">
      <Image src="/logo.png" width={586 / 3} height={296 / 3} />
      <div className="relative">
        <Image className="filter-invert opacity-90 cursor-pointer" src="/cart-icon.svg" width={35} height={35} />
        
        { !!cart.products.length && 
          <>
            <div className="absolute bottom-0 -right-2 md:left-0 h-5 w-5 my-1 border-2 border-white rounded-full bg-black text-white text-xs z-2 grid place-items-center leading-3">{ cart.products.length }</div>
            <div className="absolute top-10 right-0 tracking-tighter leading-4">
              <p className="text-right">Total</p>
              <p>{ Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total) }</p>
            </div>
          </>
        }
        </div>
    </div>
  )
}