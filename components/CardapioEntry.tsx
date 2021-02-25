import { useState } from 'react'
import * as CurrencyFormat from 'react-currency-format'
import Image from 'next/Image'

import propTypes from './../types/CardapioEntry'

function LineBreakText({ text, className }) {
  return text.split('\n').map((x, i) => <p key={x + i} className={className}>{x}</p>)
}

export default function CardapioEntry(props: propTypes) {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <div onClick={() => setExpanded(!expanded)} className={`flex justify-between w-full self-center p-4 py-3 my-1 bg-black bg-opacity-40 ${ expanded ? 'rounded-t-lg' : 'rounded-lg'}`}>
        <div className="flex flex-col">
          <span className="font-semibold text-lg">{props.name}</span>
          <CurrencyFormat className="-mt-2" value={props.price} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'R$ '} />
        </div>
      </div>
      { expanded && 
          <div onClick={() => setExpanded(!expanded)} className="bg-black bg-opacity-30 -mt-1 mb-1 px-4 py-2 rounded-b-lg transition duration-500 ease-in-out">
            <LineBreakText className="text-sm -my-1" text={props.description} />
          </div>
      }
    </>
  )
}